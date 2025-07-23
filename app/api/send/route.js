import sendEmail from "@/lib/nodemail";
import { NextResponse } from "next/server";
export async function POST(req, res) {
    const body = await req.json();
    const { name, email, message } = body;
    try{
    const response = await sendEmail({ name, email, message });

     return NextResponse.json(
      { message: "Email sent successfully", data: response },
      { status: 200 }
    );
    }
    catch(e){
        console.log(e)
         return NextResponse.json({ message: "Server error", error: e.message || e.toString() }, { status: 500 });
  }
    }


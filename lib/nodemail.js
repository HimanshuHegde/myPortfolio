import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendEmail({name,email,message}){
    try{
        await transporter.verify();
        const send = await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `Message from ${name}`,
            text: message,
          });
          return send.response
    }catch(e){
        console.log(e)
        return { success: false, error: e.message || e.toString() }
    }
}
export default sendEmail
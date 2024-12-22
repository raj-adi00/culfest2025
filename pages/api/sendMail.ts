import nodemailer from "nodemailer";


interface mailOptions {
  receiver: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async ({ receiver, subject, text, html }: mailOptions) => {
    const transportOptions = {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT === "465", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };
    
    const transporter = nodemailer.createTransport(transportOptions);
    
    const mailOptions = {
      from: `Culfest <${process.env.EMAIL_USER}>`,
      to: receiver,
      subject: subject,
      text: text,
      html: html,
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      
      // Verify if email was sent successfully
      if (info.response && info.response.startsWith('250')) {
        // Successful send, as response starts with '250 OK'
        console.log("Email sent successfully:", info);
        return true;
      } else {
        // If response does not start with '250', it indicates an issue
        console.log("Failed to send email. Response:", info.response);
        return false;
      }
    } catch (error) {
      console.log("Error sending email:", error);
      return false;
    }
  };
  
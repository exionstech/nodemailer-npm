import { Request, Response, Router } from "express";
import { transporter } from "../../lib/nodemailer";
import { z } from "zod";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "OTP for Email Verification",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Email Verification</h2>
            <p>Please use the following OTP to verify your email address:</p>
            <h3 style="background-color: #f2f2f2; padding: 10px; text-align: center; font-size: 24px; letter-spacing: 5px;">${otp}</h3>
            <p>This OTP will expire in 10 minutes.</p>
            <p>If you didn't request this verification, please ignore this email.</p>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
      return;
    }
    
    res.status(500).json({ message: "Error sending email" });
  }
});

router.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ 
    message: "Email service is running",
    emailConfigured: Boolean(process.env.GMAIL_EMAIL && process.env.GMAIL_PASSWORD)
  });
});

export default router;
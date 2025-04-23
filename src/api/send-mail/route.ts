import { Request, Response, Router } from "express";
import { transporter } from "../../lib/nodemailer";
import { z } from "zod"

const router = Router();

const emailOption = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
})

router.post("/send-mail", async (req: Request, res: Response) => {

  const { email, otp } = emailOption.parse(req.body)
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: "OTP for Email Verification",
    text: `Your OTP is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

export default router;

import { Request, Response, Router } from "express";
import { sendVerificationCode } from "../../mail/emails";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    await sendVerificationCode(email, otp);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);

    res.status(500).json({ message: "Error sending email" });
  }
});

router.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Email service is running",
    emailConfigured: Boolean(
      process.env.GMAIL_EMAIL && process.env.GMAIL_PASSWORD
    ),
  });
});

export default router;

import { Request, Response, Router } from 'express';
import { sendSuccess } from '../../utils/response-handler';

const router = Router();

// GET /api/send-mail
router.get('/', (req: Request, res: Response) => {
  sendSuccess(res, { message: 'Hello World!' }, 'Greeting retrieved successfully');
});

export default router;
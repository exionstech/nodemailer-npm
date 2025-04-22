import { Router } from 'express';
import sendEmailRoutes from './send-mail/route';

const router = Router();

router.use('/send-mail', sendEmailRoutes);

export default router;
import express from 'express'
import { clerkwebhooks } from '../controller/usercontroller.js'
const userRouter = express.Router()
userRouter.post('/webhooks',clerkwebhooks);

export default userRouter
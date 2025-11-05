// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { clerkMiddleware, requireAuth } from '@clerk/express'
// import aiRouter from './routes/aiRoutes.js';
// import connectCloudinary from './configs/cloudinary.js';
// import userRouter from './routes/userRoutes.js';

// const app = express();

// await connectCloudinary()

// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())

// app.get('/',(req, res)=>res.send('server is live'))

// app.use(requireAuth())

// app.use('/api/ai', aiRouter)
// app.use('/api/ai', userRouter)


// const PORT=process.env.PORT ||3000;

// app.listen(PORT, ()=>{
//   console.log('server is running on port', PORT);
// })

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// Connect to Cloudinary
await connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Base route
app.get('/', (req, res) => {
  res.send('✅ Server is live (via Vercel)!');
});

// Protected routes
app.use('/api/ai', requireAuth, aiRouter);
app.use('/api/user', requireAuth, userRouter);

// ⚠️ DO NOT call app.listen() on Vercel
// Instead, export the app for Vercel serverless functions
export default app;

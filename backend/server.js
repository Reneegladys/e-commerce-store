// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoute.js'
import cartRoutes from './routes/cartRoute.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

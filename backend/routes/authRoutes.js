import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed });
    await user.save();
    res.status(201).json({ message: 'Användare skapad' });
  } catch (err) {
    res.status(500).json({ error: 'Registrering misslyckades' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Fel e-post eller lösenord' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Fel e-post eller lösenord' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Inloggning misslyckades' });
  }
});

// GET /api/auth/profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Kunde inte hämta profil' });
  }
});

export default router;

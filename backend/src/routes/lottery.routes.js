import express from 'express';
import {
  getPools,
  getLatest,
  addPool,
  overrideResults,
  login,
} from '../controllers/lottery.controller.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'No token' });
  try {
    const token = header.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

router.post('/admin/login', login);
router.get('/pools', getPools);
router.get('/pools/:city/latest', getLatest);
router.post('/admin/pools', auth, addPool);
router.put('/admin/pools/:city/results', auth, overrideResults);

export default router;

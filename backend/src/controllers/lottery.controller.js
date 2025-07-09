import { CityPool, LotteryResult } from '../models/lottery.model.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
};

export const getPools = async (req, res) => {
  const pools = await CityPool.findAll();
  const data = [];
  for (const pool of pools) {
    const latest = await LotteryResult.findOne({
      where: { city: pool.name },
      order: [['drawDate', 'DESC']],
    });
    data.push({
      name: pool.name,
      drawTime: pool.drawTime,
      latest,
    });
  }
  res.json(data);
};

export const getLatest = async (req, res) => {
  const { city } = req.params;
  const result = await LotteryResult.findOne({
    where: { city },
    order: [['drawDate', 'DESC']],
  });
  if (!result) return res.status(404).json({ message: 'No result' });
  res.json(result);
};

export const addPool = async (req, res) => {
  const { name, drawTime } = req.body;
  const [pool] = await CityPool.findOrCreate({ where: { name }, defaults: { drawTime } });
  res.json(pool);
};

export const overrideResults = async (req, res) => {
  const { city } = req.params;
  const { drawDate, numbers } = req.body;
  const [result] = await LotteryResult.upsert({ city, drawDate, numbers });
  res.json(result);
};

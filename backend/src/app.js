import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import lotteryRoutes from './routes/lottery.routes.js';
import sequelize from './config/database.js';
import { startScheduler } from './cron/fetchResults.js';
import { CityPool } from './models/lottery.model.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', lotteryRoutes);

const PORT = process.env.PORT || 4000;

async function init() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const defaultCities = ['Jakarta', 'Surabaya', 'Medan', 'Bali', 'Makassar'];
    for (const name of defaultCities) {
      await CityPool.findOrCreate({ where: { name } });
    }
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
    startScheduler();
  } catch (err) {
    console.error('DB connection error', err);
  }
}

init();

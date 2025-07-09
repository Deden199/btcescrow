import cron from 'node-cron';
import { CityPool, LotteryResult } from '../models/lottery.model.js';

function generateNumbers() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join('');
}

export const startScheduler = () => {
  cron.schedule('0 0 * * *', async () => {
    const cities = await CityPool.findAll();
    for (const city of cities) {
      const numbers = generateNumbers();
      await LotteryResult.create({
        city: city.name,
        drawDate: new Date(),
        numbers,
      });
      console.log(`Draw for ${city.name}: ${numbers}`);
    }
  });
};

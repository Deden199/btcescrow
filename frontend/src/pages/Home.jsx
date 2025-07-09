import { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CityPoolCard from '../components/CityPoolCard.jsx';
import api from '../services/api.js';

export default function Home() {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    api.get('/pools').then(r => setPools(r.data));
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-3">
        {pools.map(pool => (
          <CityPoolCard key={pool.name} pool={{
            name: pool.name,
            drawDate: pool.latest ? pool.latest.drawDate : '-',
            numbers: pool.latest ? pool.latest.numbers : '-',
          }} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

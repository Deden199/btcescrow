import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import api from '../services/api.js';

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [city, setCity] = useState('');
  const [pools, setPools] = useState([]);

  useEffect(() => {
    if (token) {
      api.get('/pools')
        .then(r => setPools(r.data))
        .catch(() => setToken(null));
    }
  }, [token]);

  const handleLogin = async e => {
    e.preventDefault();
    const res = await api.post('/admin/login', loginData);
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
  };

  const addCity = async e => {
    e.preventDefault();
    await api.post('/admin/pools', { name: city }, { headers: { Authorization: `Bearer ${token}` } });
    setCity('');
    const r = await api.get('/pools');
    setPools(r.data);
  };

  if (!token) {
    return (
      <div>
        <Header />
        <main className="container mx-auto p-4">
          <form onSubmit={handleLogin} className="space-y-2 max-w-sm mx-auto">
            <input className="border p-2 w-full" placeholder="Username" value={loginData.username} onChange={e => setLoginData({...loginData, username: e.target.value})} />
            <input type="password" className="border p-2 w-full" placeholder="Password" value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} />
            <button className="bg-primary text-white px-4 py-2" type="submit">Login</button>
          </form>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <form onSubmit={addCity} className="space-y-2 max-w-sm">
          <input className="border p-2 w-full" placeholder="Nama Kota" value={city} onChange={e => setCity(e.target.value)} />
          <button className="bg-primary text-white px-4 py-2" type="submit">Tambah Kota</button>
        </form>
        <div className="mt-4 grid gap-2">
          {pools.map(p => (
            <div key={p.name} className="border p-2 flex justify-between">
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

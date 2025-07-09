import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 bg-cover" style={{backgroundImage:'url(https://tailwindcss.com/_next/static/media/hero-pattern-dark.d280c9a2.svg)'}}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">Nusantara Pool</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Beranda</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
  );
}

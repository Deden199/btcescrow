export default function CityPoolCard({ pool }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="font-semibold text-lg">{pool.name}</h3>
      <p className="text-sm">Tanggal: {pool.drawDate}</p>
      <p className="text-xl font-bold text-primary light">{pool.numbers || '-'}</p>
    </div>
  );
}

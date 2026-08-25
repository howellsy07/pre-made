import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '15px' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home / Catalog</Link>
    </nav>
  );
}
import Navbar from './Navbar';

export default function Header({ title = "CCS112 Lab Application" }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #ddd' }}>
      <h2 style={{ margin: 0 }}>{title}</h2>
      <Navbar />
    </header>
  );
}
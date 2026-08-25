import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h2>Product Details</h2>
      <p>Viewing details for Product ID: <strong>{id}</strong></p>
      <Link to="/" style={{ color: '#2563eb' }}>&larr; Back to Catalog</Link>
    </div>
  );
}
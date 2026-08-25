import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <h3>{product.title || product.name}</h3>
      <p>₱{product.price}</p>
      <div style={{ marginBottom: '10px' }}>
        <button className={styles.btn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button className={styles.btn} onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <Link to={`/products/${product.id}`} style={{ color: '#2563eb' }}>View Details</Link>
    </div>
  );
}
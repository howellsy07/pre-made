export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', background: '#fff', borderTop: '1px solid #ddd', marginTop: 'auto' }}>
      <p style={{ margin: 0, color: '#666' }}>&copy; {new Date().getFullYear()} CCS112 Lab</p>
    </footer>
  );
}
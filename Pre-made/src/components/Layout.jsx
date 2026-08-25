import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f8fafc' }}>
      <Header title={title} />
      <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
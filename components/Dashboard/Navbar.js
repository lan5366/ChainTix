import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link href="/">
        <img src="/logo.png" alt="ChainTix Logo" style={styles.logo} />
      </Link>

      <div style={styles.rightSection}>
        <Link href="/events">
          <button style={styles.button}>Events</button>
        </Link>
        <button style={styles.button}>Connect Wallet</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 3rem',
    backgroundColor: '#fcf8ec', // matches logo background
    borderBottom: '2px solid #ddd',
  },
  logo: {
    height: '80px',
    maxHeight: '100px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  rightSection: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  button: {
    padding: '0.9rem 1.6rem',
    fontSize: '1rem',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;

import React from 'react';

// Mengimpor gambar dari folder assets (pastikan foldernya sesuai)
import logoBpm from './assets/logo-bpm.svg';
import iconInstagram from './assets/icon-instagram.svg';
import iconX from './assets/icon-x.svg';

const App: React.FC = () => {
  // --- BAGIAN CSS (Inline Styles) ---
  const styles = {
    // Memastikan seluruh halaman berwarna cokelat gelap
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#4A2114',
      margin: 0,
      padding: 0,
      // Memberi jarak atas agar konten tidak tertutup navbar yang sticky
      paddingTop: '85px', 
      fontFamily: 'Arial, sans-serif',
    },
    // Navbar statis (sticky) di bagian atas
    navbar: {
      position: 'fixed' as 'fixed', // Agar tetap di atas saat scroll
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#4A2114',
      display: 'flex',
      justifyContent: 'space-between', // Memisahkan logo(kiri) dan menu(kanan)
      alignItems: 'center', // Membuat elemen sejajar di tengah secara vertikal
      padding: '15px 20px',
      borderBottom: '3px solid #FFFFFF', // Garis putih di bawah navbar
      boxSizing: 'border-box' as 'border-box',
      zIndex: 1000, // Memastikan navbar selalu di lapisan paling atas
    },
    // Grup untuk About Us dan icon sosial media di kanan
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '25px', // Jarak antar elemen di sebelah kanan
    },
    aboutText: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '20px',
    },
    logoKiri: {
      height: '60px',
    },
    logoSosmed: {
      height: '35px',
      width: '35px',
      cursor: 'pointer',
    },
    // Dummy content untuk menguji fitur scroll
    content: {
      padding: '40px',
      color: '#FFFFFF',
    }
  };

  // --- BAGIAN HTML (JSX) ---
  return (
    <div style={styles.pageContainer}>
      
      {/* Bagian Navbar */}
      <nav style={styles.navbar}>
        {/* Sisi Kiri: Logo BPM */}
        <div>
          <a href="/">
            <img src={logoBpm} alt="Logo BPM FIA UI" style={styles.logoKiri} />
          </a>
        </div>

        {/* Sisi Kanan: About Us & Social Media */}
        <div style={styles.navRight}>
          <a href="#about" style={styles.aboutText}>About Us</a>
          
          <a href="https://www.instagram.com/bpmfiaui/" target="_blank" rel="noopener noreferrer">
            <img src={iconInstagram} alt="Instagram BPM FIA UI" style={styles.logoSosmed} />
          </a>
          
          <a href="https://x.com/BPMFIAUI" target="_blank" rel="noopener noreferrer">
            <img src={iconX} alt="X BPM FIA UI" style={styles.logoSosmed} />
          </a>
        </div>
      </nav>

      {/* Konten Halaman Utama */}
      <main style={styles.content}>
        {/* Tambahkan elemen <br/> yang banyak di bawah ini jika kamu ingin 
            menguji (scroll ke bawah) apakah navbarnya benar-benar statis */}
        <h2>Selamat datang di Website BPM FIA UI!</h2>
        <p>Halaman ini disiapkan untuk mencoba navbar statis.</p>
      </main>

    </div>
  );
};

export default App;
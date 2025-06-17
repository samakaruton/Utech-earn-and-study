import React from 'react';

const Footer: React.FC = () => (
  <footer
    style={{
      width: '100vw',
      position: 'fixed',
      left: 0,
      bottom: 0,
      background: '#14213d',
      color: '#fff',
      padding: '1rem 0.5rem',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: 500,
      boxShadow: '0 -2px 8px #0002',
      zIndex: 1000,
    }}
  >
    © 2024 University of Technology, Jamaica. All rights reserved.
  </footer>
);

export default Footer;

import React from 'react';

interface RibbonProps {
  children?: React.ReactNode;
}

const Ribbon: React.FC<RibbonProps> = ({ children }) => (
  <div
    style={{
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#14213d',
      color: '#fff',
      padding: '1.5rem 0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      fontWeight: 600,
      fontSize: '1.2rem',
      letterSpacing: 0.5,
      boxShadow: '0 2px 8px #0002',
      zIndex: 1000,
      marginTop: 0,
    }}
  >
    <span style={{ marginLeft: 16, fontSize: '2rem', fontWeight: 700 }}>
      University of Technology, Jamaica Earn and Study Program
    </span>
    {children && <div style={{ marginRight: 16 }}>{children}</div>}
  </div>
);

export default Ribbon; 
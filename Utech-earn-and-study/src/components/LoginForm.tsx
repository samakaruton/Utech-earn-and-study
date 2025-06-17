import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (employee: { name: string; id: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && id) {
      onLogin({ name, id });
      setName('');
      setId('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="modern-card" style={{ animation: 'fadeIn 0.7s' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 16, color: '#2563eb', fontWeight: 700, fontSize: '2rem', letterSpacing: 0.5 }}>Student Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ID Number"
        value={id}
        onChange={e => setId(e.target.value)}
        required
      />
      <button type="submit" className="modern-btn" style={{ width: '100%', marginTop: 8 }}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm; 
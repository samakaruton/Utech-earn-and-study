import React from 'react';

interface StudentRecord {
  name: string;
  id: string;
  time: string;
}

interface DashboardProps {
  records: StudentRecord[];
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ records, onLogout }) => {
  return (
    <div className="modern-card" style={{ maxWidth: 700, animation: 'fadeIn 0.7s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.7rem' }}>Student Login Records</h2>
        <button onClick={onLogout} className="modern-btn" style={{ background: 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)', minWidth: 100 }}>
          Logout
        </button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: 12, overflow: 'hidden', background: '#f8fafc' }}>
        <thead>
          <tr style={{ background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)', color: '#fff' }}>
            <th style={{ padding: 14, textAlign: 'left', fontWeight: 600 }}>Name</th>
            <th style={{ padding: 14, textAlign: 'left', fontWeight: 600 }}>ID Number</th>
            <th style={{ padding: 14, textAlign: 'left', fontWeight: 600 }}>Login Time</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr><td colSpan={3} style={{ textAlign: 'center', padding: 32, color: '#64748b' }}>No records yet.</td></tr>
          ) : (
            records.map((rec, idx) => (
              <tr key={idx} style={{ transition: 'background 0.2s' }} onMouseOver={e => (e.currentTarget.style.background = '#e0e7ff')} onMouseOut={e => (e.currentTarget.style.background = '')}>
                <td style={{ padding: 14 }}>{rec.name}</td>
                <td style={{ padding: 14 }}>{rec.id}</td>
                <td style={{ padding: 14 }}>{rec.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard; 
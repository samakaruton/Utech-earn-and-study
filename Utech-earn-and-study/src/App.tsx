import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Ribbon from './components/Ribbon'
import Footer from './components/Footer'
import './App.css'

interface StudentRecord {
  name: string
  id: string
  time: string
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [records, setRecords] = useState<StudentRecord[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('studentRecords')
    if (stored) setRecords(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('studentRecords', JSON.stringify(records))
  }, [records])

  const handleLogin = (student: { name: string; id: string }) => {
    const newRecord: StudentRecord = {
      ...student,
      time: new Date().toLocaleString(),
    }
    setRecords(prev => [newRecord, ...prev])
    setLoggedIn(true)
    setShowLogin(false)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', display: 'flex', flexDirection: 'column' }}>
      <Ribbon>
        {!loggedIn && !showLogin && (
          <button
            style={{
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 1px 4px #0001',
              transition: 'background 0.2s',
            }}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        )}
      </Ribbon>
      <div style={{ flex: 1, paddingTop: '5.5rem', paddingBottom: '3.5rem' }}>
        {!loggedIn ? (
          showLogin ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
              <div className="modern-card" style={{ maxWidth: 480, textAlign: 'center', padding: '2.5rem 2rem', boxShadow: '0 8px 32px #2563eb22', animation: 'fadeIn 0.7s' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>
                  <span role="img" aria-label="student">🎓</span>
                </div>
                <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 12, letterSpacing: 0.5 }}>
                  Welcome to the Earn and Study Program Portal
                </h1>
                <p style={{ color: '#334155', fontSize: '1.15rem', marginBottom: 0 }}>
                  Track your participation, log your hours, and be part of the University of Technology, Jamaica's innovative Earn and Study initiative. Click <b>Login</b> above to get started!
                </p>
              </div>
            </div>
          )
        ) : (
          <Dashboard records={records} onLogout={handleLogout} />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App

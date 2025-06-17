import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Ribbon from './components/Ribbon'
import Footer from './components/Footer'
import './App.css'

interface EmployeeRecord {
  name: string
  id: string
  time: string
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [records, setRecords] = useState<EmployeeRecord[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('employeeRecords')
    if (stored) setRecords(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('employeeRecords', JSON.stringify(records))
  }, [records])

  const handleLogin = (employee: { name: string; id: string }) => {
    const newRecord: EmployeeRecord = {
      ...employee,
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
            <div style={{ textAlign: 'center', marginTop: '4rem', color: '#334155', fontSize: '1.3rem', fontWeight: 500 }}>
              Welcome to the Earn and Study Program Portal
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

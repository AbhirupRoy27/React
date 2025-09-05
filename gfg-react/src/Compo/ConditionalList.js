import { useState } from 'react'

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Raj' },
  { id: 3, name: 'Rahul' },
]

const styles = {
  listStyle: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.3rem',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#030',
    color: 'white',
    fontWeight: 600,
    letterSpacing: 2,
  },
  loginDev: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    gap: '0.3rem',
  },
  logoutButton: { padding: 10, fontWeight: '600', border: 0 },
}

export default function List() {
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
      <ul style={styles.listStyle}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div style={styles.loginDev}>
        {isLogin ? (
          <Check isLogin={isLogin} handleLogin={handleLogin} />
        ) : (
          <h1 onClick={handleLogin}>Login Again</h1>
        )}
      </div>
    </>
  )
}

const Check = ({ isLogin, handleLogin }) => {
  if (isLogin) {
    return (
      <>
        <h1>Welcome</h1>
        <button onClick={handleLogin} style={styles.logoutButton}>
          Logout
        </button>
      </>
    )
  }
}

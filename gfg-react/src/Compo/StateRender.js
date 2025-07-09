import React, { useState } from 'react'
import Text from './TextInput'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '28px',
  gap: '1.5rem',
  color: 'white',
  flexDirection: 'column',
  backgroundColor: 'purple',
  borderRadius: '10px',
  Transition: 'all 1s ease',
}

function StateRender() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className="inc-dec" style={styles}>
        <h2> The number is: {count}</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '10px',
              fontWeight: 600,
              backgroundColor: 'limegreen',
            }}
          >
            Incriment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: '10px',
              fontWeight: 600,
              backgroundColor: 'darkred',
              color: '#ffffff',
            }}
          >
            Decrement
          </button>
        </div>
      </div>
      <Text />
    </div>
  )
}

export default StateRender

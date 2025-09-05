import React, { useReducer } from 'react'
import Text from './TextInput'
import { StateRenderReducer } from '../_CompoReducer/StateRenderReducer'

const styles = {
  rootCon: { display: 'flex', justifyContent: 'space-around' },
  mainContainer: {
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
  },
  buttonDiv: { display: 'flex', gap: '0.5rem' },
  incremrntButton: {
    padding: '10px',
    fontWeight: 600,
    backgroundColor: 'limegreen',
    borderRadius: 4,
    border: 0,
  },
  decrementButton: {
    padding: '10px',
    fontWeight: 600,
    backgroundColor: 'darkred',
    color: '#ffffff',
    borderRadius: 4,
    border: 0,
  },
}

function StateRender() {
  const initialState = {
    value: 0,
  }
  const [count, dispatch] = useReducer(StateRenderReducer, initialState)

  // console.log(count.value)  // (Debugger)

  return (
    <div style={styles.rootCon}>
      <div className="inc-dec" style={styles.mainContainer}>
        <h2>The number is: {count.value}</h2>
        <div style={styles.buttonDiv}>
          <button
            onClick={() => dispatch({ type: 'add' })}
            style={styles.incremrntButton}
          >
            Incriment
          </button>
          <button
            onClick={() => dispatch({ type: 'sub' })}
            style={styles.decrementButton}
            disabled={count.value === 0}
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

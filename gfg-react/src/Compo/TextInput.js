import React, { useState } from 'react'

const textStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '18px',
  gap: '1rem',
  flexDirection: 'column',
}

function TextInput() {
  const [text, setText] = useState('...')

  // const textUpdate = (event) => {
  //   let txt = ''
  //   txt = event.target.value
  //   setText(txt)
  // }

  return (
    <div style={textStyle}>
      <p style={{ fontWeight: 900 }}>Input: {text}</p>
      <input
        placeholder="Serch...."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '6px' }}
      />
    </div>
  )
}

export default TextInput

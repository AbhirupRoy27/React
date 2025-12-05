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
      <div>
        <p style={{ fontWeight: 900 }}>
          Input: <b style={{ color: 'red' }}>{text}</b>
        </p>
      </div>
      <input
        placeholder="Serch...."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '6px' }}
        maxLength={15}
      />
    </div>
  )
}

export default TextInput

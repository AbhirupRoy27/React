import React, { useState } from 'react'

function Submit() {
  const [inputText, setInputText] = useState('') // live input
  const [submittedText, setSubmittedText] = useState('') // shown on <p>

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = () => {
    setSubmittedText(inputText)
  }

  return (
    <div style={{ padding: '20px' }}>
      Form Submit:
      <br />
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: '6px' }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginLeft: '10px', padding: '6px' }}
      >
        Show Text
      </button>
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
        You typed: {submittedText}
      </p>
    </div>
  )
}

export default Submit

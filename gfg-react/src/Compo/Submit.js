import React, { useState } from 'react'

const style = {
  formStyle: { padding: '20px' },
  inputStyle: { padding: '6px', marginLeft: '5px' },
  inputButton: {
    marginLeft: '10px',
    padding: '6px',
    border: 0,
    height: '32px',
  },
  submitText: { marginTop: '20px', fontWeight: 'bold' },
}

function Submit() {
  const [inputText, setInputText] = useState('') // live input
  const [submittedText, setSubmittedText] = useState('') // shown on <p>

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedText(inputText)
  }

  return (
    <form style={style.formStyle} onSubmit={handleSubmit}>
      <label htmlFor="text">Form Submit:</label>
      <input
        id="text"
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type something..."
        style={style.inputStyle}
      />
      <button onClick={handleSubmit} style={style.inputButton}>
        Show Text
      </button>
      <p style={style.submitText}>You typed: {submittedText}</p>
    </form>
  )
}

export default Submit

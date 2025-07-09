import React, { useState } from 'react'

function UpadtingObject() {
  const initialState = {
    name: '... ',
    age: 0,
  }

  const onNameChange = (e) => {
    setForm({ ...form, name: e.target.value })
    // console.log(form)
  }
  const onAgeChange = (e) => {
    setForm({ ...form, age: e.target.value })
    // console.log(form)
  }
  const [form, setForm] = useState(initialState)

  return (
    <div>
      <label>Name :</label>
      <input placeholder="Enter Name" onChange={onNameChange} />
      <input placeholder="Enter Age" onChange={onAgeChange} maxLength={2} />
      <p>
        {form.name} is {form.age} years old.
      </p>
    </div>
  )
}

export default UpadtingObject

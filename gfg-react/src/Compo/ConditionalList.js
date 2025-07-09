const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Raj' },
  { id: 3, name: 'Rahul' },
]

const isLoggin = true

const List = () => {
  return (
    <>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1.3rem',
          justifyContent: 'space-around',
          padding: '10px',
          backgroundColor: '#030',
          color: 'white',
          fontWeight: 600,
          letterSpacing: 2,
        }}
      >
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {isLoggin ? <Check /> : <h1>Login Again</h1>}
      {/* {isLoggin && <Check />} */}
    </>
  )
}

const Check = () => {
  if (isLoggin) {
    return (
      <h1 style={{ padding: 10, display: 'flex', justifyContent: 'center' }}>
        Welcome
      </h1>
    )
  }
  // else {
  //   return <h1>Please Login</h1>
  // }
}

export default List

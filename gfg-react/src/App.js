import './App.css'
import UserList from './Compo/ConditionalList'
import State from './Compo/StateRender'
import Submit from './Compo/Submit'
// import ObjectState from './Compo/UpadtingObject'
import BrandFiler from './Ex01/ExerciseBrandFilter'
import Cart from './Ex01/AddToCart'

let name = 0
// const element = <h2>I am a SDE at Amazon</h2>

const Header = () => {
  const incrementHandler = () => {
    console.log(name++)
  }

  return (
    <div className="header" style={{ padding: 10 }}>
      <h1>AR</h1>
      <div className="search-bar" style={{ display: 'flex', gap: '0.5rem' }}>
        <input placeholder="Search Item" style={{ padding: 10 }} />
        <button onClick={incrementHandler} style={{ padding: 10 }}>
          Add +1
        </button>
      </div>
    </div>
  )
}

// const Test = () => {
//   return (
//     <>
//       <h1>Test Succesful: {name}</h1>
//     </>
//   );
// }

function App() {
  return (
    <div className="Main">
      <Header />
      <UserList />
      <State />
      {/* <Test /> */}

      <Submit />
      {/* <ObjectState /> */}
      <BrandFiler />
      <Cart />
    </div>
  )
}

export default App

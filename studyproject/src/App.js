import './App.css';
import TestCompo from './Compo/testCompo'
import MultiCheck from './Compo/MultiProps'
// import ArrayOfObj from './Compo/ArrayOfObj'
// import Cards from './Compo/CardWithChildren'
import Jobs from './JsonCompo/TestJson'

// const Drawing = "Hobby"

function App() {
  return (
    <div className="App">
      <TestCompo name="Abhirup" age={22} />
      <div className="cards">
            <MultiCheck name="Abhi" age="10" hobby="Drawing" userAge={20} userName="hello" id={false}/>
            <MultiCheck name="Sap" age="20" hobby="Backing" userAge={50} userName="hi" id={true}/>
      </div>
   {/*  <ArrayOfObj />
    <Cards namedClass='test-card' >
      <h1>Hello</h1>
      <p>Text</p>
      <button>Add Job</button>
    </Cards> */}
    <div className='lst-jobs'>
    <Jobs />
    </div>
    </div>
  );
}

export default App;

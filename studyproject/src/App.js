import './App.css';
import TestCompo from './Compo/testCompo'
import MultiCheck from './Compo/MultiProps'

// const Drawing = "Hobby"

function App() {
  return (
    <div className="App">
      <TestCompo name="Abhirup" age={22} />
      <div className="cards">
            <MultiCheck name="Abhi" age="10" hobby="Drawing" userAge={20} userName="hello" id={false}/>
            <MultiCheck name="Sap" age="20" hobby="Backing" userAge={50} userName="hi" id={true}/>
      </div>
      
    </div>
  );
}

export default App;

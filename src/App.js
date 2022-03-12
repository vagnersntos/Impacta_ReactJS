import logo from './logo.svg';
import './App.css';
// import ComponentClass from './components/Classe/ComponentClass';
// import ComponentFunction from './components/Function/ComponentFunction';
// import Arrow from './components/ArrowFunction/Arrow';
import Pai from './components/Props/Pai';
import FuncPai from './components/Props/fPai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ComponentClass />
        <ComponentFunction/>
        <Arrow/>*/}
        <FuncPai />
        <Pai />

      </header>
    </div>
  );
}

export default App;

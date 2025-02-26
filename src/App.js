import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
  return (
   <div className="App">
    <Greet name='Ahmad' heroName='Uppal' />
    <Greet name='Abdullah' heroName='Chitta' />
    <Greet name='Zohaib' heroName='Moulvi' />
   </div>
  );
}

export default App;

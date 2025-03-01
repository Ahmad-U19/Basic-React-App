import './App.css';
import Navbar from './Navbar';
import TextForms from './TextForms'

function App() {
  return (
  <>
    <Navbar title='Text Utils'/>
    <div className="container">
    <TextForms heading='Enter Your Text To Analyze' />
    </div>
  </>
  );
}

export default App;

import './App.css';

let name="Ahmad";
function App() {
  return (
  //  <div className="App">
  //   <Greet name='Ahmad' heroName='Uppal' />
  //   <Greet name='Abdullah' heroName='Chitta' />
  //   <Greet name='Zohaib' heroName='Moulvi' />
  //  </div>
  <>
    <nav>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </nav>
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex dolorum harum quod, tenetur alias neque repudiandae deleniti quo quaerat? Natus nesciunt, itaque suscipit consequatur distinctio ea illum earum assumenda!</p>
  </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Me from './Me';
import lennakan from './lennakan.jpg';

function App() {
  return (
   <div>
   <Me name="Valod" profession="policeman" src="download.jpg"/>
   <Me name="Ani" profession="haircuter" src="download.png"/>
   <Me name="petros" profession="doctor" src="logo192.png"/>
   <Me name="lennakan" profession="city" src={lennakan}/>
   </div>
  );
}

export default App;

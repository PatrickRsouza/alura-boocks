import './App.css';
import logo from './imagens/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src={logo} alt='Logo do Alura Book'/>
          <p><strong>Alura</strong>Book</p>
        </div>
      </header>
    </div>
  );
}

export default App;

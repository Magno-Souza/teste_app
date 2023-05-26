import Registrar from './components/Registrar.js';
import Login from './components/Login.js';
import CadasLog from './components/CadasLog.js';
import './style/App.css'
import './style/Login.css';
import './style/Registrar.css';
import './style/CadasLog.css';
import Logo from './imagens/logo.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <img src={Logo} className='logoCadaslog' alt="Logo do app" title='Logo do App'/>
        <CadasLog/>
        <img src={Logo} className='logo' alt="Logo do app" title='Logo do App'/>
        <Login/>
        <img src={Logo} className='logo' alt="Logo do app" title='Logo do App'/>
        <Registrar/>
      </div>
      </header>
    </div>
  );
}

export default App;

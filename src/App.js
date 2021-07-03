import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import Routes from './Routes'

function App() {
  const [login,setLogin] = useState(false)

  return (
    <div className="App">
      <Routes loggedIn={login} handleLogin ={setLogin} />
    </div>
  );
}

export default App;

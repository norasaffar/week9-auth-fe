import { useState} from "react";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LogOrSign from './components/logOrSign/LogOrSign';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (  
  <div>
    <Header loggedIn={loggedIn} />
    <LogOrSign setLoggedIn={setLoggedIn} />
    <Footer loggedIn={loggedIn} />
  </div>
  )
  
}

export default App;

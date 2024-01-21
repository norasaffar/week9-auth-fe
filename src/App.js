import { useState , useEffect} from "react";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LogOrSign from './components/logOrSign/LogOrSign';
import { getAllBooks } from "./utils/fetch";
import BooksContainer from "./components/bookContainer/BooksContainer";
import FavContainer from "./components/favContainer/favContainer";
import submitHandler from "./components/bookCard/bookCard"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const[allBooks, setAllBooks] = useState([]);
  const [favBook, setFavBook] = useState();
  // const [submitHandler, submitHandler] = useState();

  // const[dep, setDep] = useState(true);

  useEffect(() => {
    (async ()=> {
   const data = await getAllBooks();
   
   setAllBooks(data.books);
   console.log(allBooks);
    })();


  }, []);

  return (  
  <div>
    <Header loggedIn={loggedIn} />
    <LogOrSign setLoggedIn={setLoggedIn} />
    <BooksContainer allBooks={allBooks} loggedIn={loggedIn} setFavBook={setFavBook}/>
    <FavContainer favBook={setFavBook}  loggedIn={loggedIn} sumbitHandler={submitHandler} />
    <Footer loggedIn={loggedIn} />
  </div>
  )
  
}

export default App;

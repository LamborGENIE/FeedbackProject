
import './App.css';
import View from "./containers/View.js"
import  {useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './containers/Login';
import Header from './components/Header';



function App() {
  const [currentUser, setCurrentUser] = useState({role: ""});
  const [isLoggedIn, setIsLoggedIn] = useState({isLoggedIn: false})
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={isLoggedIn === false ? <View currentUser={currentUser} 
              setCurrentUser={setCurrentUser} /> : 
          <Login currentUser={currentUser} 
              setCurrentUser={setCurrentUser}
              setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/view" element={<View currentUser={currentUser}/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

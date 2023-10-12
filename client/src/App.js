import logo from './logo.svg';
import './App.css';
import EmployeeView from "./components/EmployeeView.js"
import ManagerView from "./components/ManagerView.js"
import  {useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './containers/Login';



function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState({isLoggedIn: false})
  return (
    <>
      <BrowserRouter>
        {JSON.stringify(currentUser)}

        <Routes>
          <Route path="/" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/view" element={<EmployeeView currentUser={currentUser}/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

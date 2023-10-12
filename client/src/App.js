import logo from './logo.svg';
import './App.css';
import Employee from "./components/EmployeeView.js"
import Manager from "./components/ManagerView.js"
import  {useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './containers/Login';



function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  return (
    <>
      <BrowserRouter>
        {JSON.stringify(currentUser)}

        <Routes>
          <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/" element={<Employee />} />
          {/* <Route path="/employees/:id/messages" element={<Manager />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

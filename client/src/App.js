import logo from './logo.svg';
import './App.css';
import Employee from "./components/EmployeeView.js"
import Manager from "./components/ManagerView.js"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Employee />} />
          {/* <Route path="/employees/:id/messages" element={<Manager />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

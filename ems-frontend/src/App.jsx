import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path="/" element={<ListEmployee />} ></Route>
          {/* http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployee />} ></Route>
          {/* http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<Employee />} ></Route>
          {/* http://localhost:3000/update-employee/:id */}
          <Route path="/update-employee/:id" element={<Employee />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

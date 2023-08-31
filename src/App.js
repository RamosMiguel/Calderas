import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "./components/public/Footer";
import Main from "./components/public/Main";
import { NavBar } from "./components/public/Navbar";
import { Detail } from "./components/public/Detail";
import { UseForm } from "./components/public/UseForm";


function App() {
  return (
    <div>

      <NavBar /> 
        <Routes>
          <Route exact path={"/"} element={<Main/>} />
          <Route  path={"/details/:id"} element={<Detail/>} />
          <Route  path={"/user-form"} element={<UseForm/>} />

        </Routes>
      

      <Footer />

    </div>
  );
}

export default App;

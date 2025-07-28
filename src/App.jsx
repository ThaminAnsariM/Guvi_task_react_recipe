
import Nav from "./components/Nav";
import Register from "./pages/Register";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home  from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Resetpassword from "./pages/Resetpassword";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Nav/>
      </div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:token" element={<Resetpassword />} />
        </Routes>

    <div>
      <Footer></Footer>
    </div>

      </div>
    
    
  );
}

export default App;

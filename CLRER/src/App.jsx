import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Villas from "./components/Villas/Villas";
import SingleVilla from "./components/Villas/SingleVilla";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/villa" element={<Villas />} />
          <Route path="/villa/:id" element={<SingleVilla />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

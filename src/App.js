import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main.jsx";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;

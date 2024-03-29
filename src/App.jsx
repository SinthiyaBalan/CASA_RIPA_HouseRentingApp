import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import faqData from "./data/faq.json";
import { Routes, Route} from "react-router-dom";
import ExploreSurroundings from "./components/ExploreSurroundings";
import AdminLogin from "./components/AdminLogin";
import loginData from "./data/loginDetails.json";
import AdminHome from "./components/AdminHome";
import { useState } from "react";
import Contact from './components/Contact'
import Booking from './components/Booking'
import Bookingscreen from './components/Bookingscreen'
import Gallery from './components/Gallery';
import GoogleMap from "./components/GoogleMap";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExploreSurroundings" element={<ExploreSurroundings />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ faqData={faqData} />} />
        <Route
          path="/AdminLogin"
          element={
            <AdminLogin loginData={loginData} user={user} setUser={setUser} />
          }
        />
        <Route path="/Booking" element={<Booking />} />
        <Route
          path="/book/:roomid"  
          element={<Bookingscreen />}
        />
    
        <Route path="/AdminHome" element={<AdminHome user={user} />} />
     
        <Route path='/GalleryImages' element={<Gallery/>} />
        <Route path='/GoogleMap' element={<GoogleMap/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

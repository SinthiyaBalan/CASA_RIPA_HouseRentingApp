
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Review from './components/Review'
import FAQ from './components/FAQ'
import faqData from './data/faq.json'
import { Routes, Route, Link } from "react-router-dom";
import ExploreSurroundings from './components/ExploreSurroundings';
import AdminLogin from './components/AdminLogin';
import loginData from './data/loginDetails.json';
import AdminHome from './components/AdminHome';
import { useState } from "react";
import Contact from './components/Contact';


function App() {

  const [user, setUser] = useState();
  
  return (
    <>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/> } />
    <Route path="/ExploreSurroundings" element={<ExploreSurroundings/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/FAQ" element={<FAQ faqData={faqData} />} />
    <Route path="/AdminLogin" element={<AdminLogin loginData={loginData} user = {user} setUser ={setUser}/>} />

    <Route path='/AdminHome' element={<AdminHome user = {user} />} />
    </Routes>
    {/* <Review/> */}
    <Footer/>

    </>
  );
}

export default App;

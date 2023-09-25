import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Review from './components/Review'
import FAQ from './components/FAQ'

import faqData from './data/faq.json'

function App() {
  
  return (
    <>
    <Nav/>
    <Home/>
    <Review/>
    <FAQ faqData = {faqData}/>
    <Footer/>
    </>
  )
}

export default App

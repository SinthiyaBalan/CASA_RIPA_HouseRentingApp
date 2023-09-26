import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Review from "./components/Review";
import { Routes, Route, Link } from "react-router-dom";
import ExploreSurroundings from "./components/ExploreSurroundings";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExploreSurroundings" element={<ExploreSurroundings />} />
      </Routes>
      {/* <Review/> */}
      <Footer />
    </>
  );
}

export default App;

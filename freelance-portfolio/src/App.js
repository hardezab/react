import "./styles/style.css"
import "./styles/style2.css"
import "./styles/style3.css"
import "./styles/style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar/Navbar"
import Header1 from "./components/header1/Header1"
import Rectcont from "./components/rectcont/Rectcont"
import Home from "./pages/Home"
import Project from "./pages/Project"
import About from "./pages/About"



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      <Header1 />   

      <Rectcont />
      </Router> 
    </div>
  );
}

export default App;
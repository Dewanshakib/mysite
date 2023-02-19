import About from "./components/About/About";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import Project from "./components/Project/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Intro" element={<Intro />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

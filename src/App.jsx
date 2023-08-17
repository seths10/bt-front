import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Splash from "./components/Splash";

const App = () => {
  return (
    <>
      <Splash />
      
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;

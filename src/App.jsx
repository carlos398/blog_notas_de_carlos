import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <header>
          <h1>Notas de Carlos</h1>
          <Nav/>  
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/proyects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
          </Routes>
        </main>

      </Router>

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </footer>
    </div>
  );
}

export default App;

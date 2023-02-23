import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact";
import Login from './components/Login';
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  // const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

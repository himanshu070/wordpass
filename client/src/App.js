import Home from './components/Home';
import Generate from './components/Generate';
import Contact from "./components/Contact";
import Login from './components/Login';
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  // const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/generate" element={<Generate />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;

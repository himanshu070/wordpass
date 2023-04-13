import Home from './components/Home';
import Generate from './components/Generate';
import Contact from "./components/Contact";
import Login from './components/Login';
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import Developer from "./components/Developer";
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About';
import { createContext, useReducer } from 'react';
import Logout from './components/Logout';
import {initialState, reducer} from "../src/reducer/UseReducer"

//context API
export const UserContext = createContext();

function App() {
  // const [darkTheme, setDarkTheme] = useState(false); 
  // const [isLogin, setIsLogin] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Routes>
          <Route exact path="/" element={1 ? <Home /> : <Login />} />
          <Route exact path="/generate" element={<Generate />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/dev" element={<Developer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="*" element={<Errorpage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

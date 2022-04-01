import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import List from "./components/List";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

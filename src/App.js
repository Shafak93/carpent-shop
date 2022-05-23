import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Purchase from './Components/Home/Purchase/Purchase';
import Tools from './Components/Home/Tools/Tools';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/product/:productId' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;

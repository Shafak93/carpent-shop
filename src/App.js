import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Purchase from './Components/Home/Purchase/Purchase';
import Tools from './Components/Home/Tools/Tools';
import Login from './Components/RequireAuth/Login/Login';
import Signup from './Components/RequireAuth/Signup/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MyProducts from './Components/Dashboard/MyProducts/MyProducts';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProducts></MyProducts>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;

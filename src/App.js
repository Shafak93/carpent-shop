import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MyProducts from './Components/Dashboard/MyProducts/MyProducts';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
import NavBar from './Components/Header/NavBar/NavBar';
import Portfolio from './Components/Header/Portfolio/Portfolio';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import Purchase from './Components/Home/Purchase/Purchase';
import Review from './Components/Home/Review/Review';
import Tools from './Components/Home/Tools/Tools';
import Login from './Components/RequireAuth/Login/Login';
import NotFound from './Components/RequireAuth/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth/RequireAuth';
import Signup from './Components/RequireAuth/Signup/Signup';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{ marginTop: 64 }}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/tools' element={<Tools></Tools>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
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
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='allusers' element={<AllUsers></AllUsers>}></Route>
            <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

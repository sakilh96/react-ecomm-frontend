import './App.css';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginContainer from './store/containers/loginContainer';
import ProfileContainer from './store/containers/profileContainer';
import ProtectedRoute from './components/middleware/ProtectedRoute';
import ProductContainer from './store/containers/ProductContainer';
import HeaderContainer from './store/containers/headerContainer';


function App() {

 
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
       <HeaderContainer/>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path='/profile' element={<ProfileContainer/>}></Route>
          <Route path='/products'>
              <Route index element={<ProductContainer/>}></Route>
              <Route path='add-products' element={<h1>Add Product page</h1>}/>
              <Route path='update-products' element={<h1>Update Product page</h1>}/>
          </Route>
        </Route>

        <Route path='/' element={<LoginContainer/>} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

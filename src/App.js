import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginContainer from './store/containers/loginContainer';
import ProfileContainer from './store/containers/profileContainer';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/products' element={<h1>Product page</h1>}></Route>
        <Route path='/add-products' element={<h1>Add Product page</h1>}></Route>
        <Route path='/update-products' element={<h1>Update Product page</h1>}></Route>
        <Route path='/profile' element={<ProfileContainer/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<LoginContainer/>} ></Route>
        <Route path='/logout' element={<h1>Logout page</h1>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

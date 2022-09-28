import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Error from './pages/404';
import Contactus from './pages/Contact-us';
import Productdetails from './pages/Productdetails';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Blogsingle from './pages/Blogsingle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Productdetails' element={<Productdetails />} />
          <Route path='/Error' element={<Error />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blogsingle' element={<Blogsingle />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

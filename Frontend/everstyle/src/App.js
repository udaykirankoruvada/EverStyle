import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Shop } from './pages/shop';
import { LoginSingup } from './pages/loginSingup';
import { ShopCategory } from './pages/shopCategory';
import { Product } from './pages/product';
import { Cart } from './pages/cart';
import {Footer} from './components/footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/> 
            <Route path="/login" element={<LoginSingup/>}/>
            <Route path="/mens" element={<ShopCategory category="men"/>}/>
            <Route path="/womens" element={<ShopCategory category="women"/>}/>
            <Route path="/kids" element={<ShopCategory category="kid"/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path=':productId' element={<Product/>}/>
          </Routes>
          
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

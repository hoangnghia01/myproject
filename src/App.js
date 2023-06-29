import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Solutions from './pages/solusions/Solutions';
import Products from './components/products/Products';
import Contact from './pages/contact/Contact';
import Chuonggoiphucvu from './pages/products/chuonggoiphucvu/Chuonggoiphucvu';
import Nursecall_solusion from './pages/solusions/nursecall_solusion/Nursecall_solusion';
import Restaurant_solusion from './pages/solusions/restaurant_solusion/Restaurant_solusion';
import Blog from './pages/blog/Blog';
import { AppProvider } from './AppContext';
import Aos from 'aos';
import { useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Product_ditail from './pages/products/product_ditail/Product_ditail';
import Cart_page from './pages/cart_page/Cart_page';
import Blog_ditail from './pages/blog/blog_ditail/Blog_ditail';
import Solusion_ditail from './pages/solusions/solusion_ditail/Solusion_ditail';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <AppProvider>
        <Header />
        <ScrollToTop />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart_page />}></Route>
          <Route path='/giai-phap' element={<Solutions />}>

          </Route>
          <Route path='/giai-phap/giai-phap-cho-benh-vien' element={<Nursecall_solusion />}></Route>
          <Route path='/giai-phap/giai-phap-cho-nha-hang' element={<Restaurant_solusion />}></Route>
          <Route path='/giai-phap/:link' element={<Solusion_ditail />}></Route>


          <Route path='/san-pham' element={<Products />}>

          </Route>
          <Route path='/san-pham/:id' element={<Product_ditail />}></Route>
          <Route path='/san-pham/chuong-goi-phuc-vu' element={<Chuonggoiphucvu />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:id' element={<Blog_ditail />}></Route>

          <Route path='/lien-he' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;

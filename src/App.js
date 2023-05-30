import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Solutions from './pages/solusions/Solutions';
import Products from './components/products/Products';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/giai-phap' element={<Solutions/>}></Route>
      <Route path='/san-pham' element={<Products/>}></Route>
      <Route path='/lien-he' element={<Contact/>}></Route>
    </Routes>
  );
}

export default App;

import './App.scss';
import HomeContainers from "./containers/HomeContainers"
import { Provider } from "react-redux"
import { Route, Routes } from 'react-router-dom';
import Product from "./components/Product/Product"
import Productadd from './components/Product/Productadd';
import ProductEdit from './components/Product/ProductEdit';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/footer/Footer';
import QrCode from './components/Qrcode/Qrcode.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path="/qrcode" element={<QrCode />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

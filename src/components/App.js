import '../stylesheets/App.css';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

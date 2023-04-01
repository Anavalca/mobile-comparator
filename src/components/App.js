import '../stylesheets/App.css';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import { Route, Routes } from 'react-router-dom';
import { ShoppingProvider } from './ShoppingContext';

const App = () => {

  return (
    <div className="App bg-whiteSmoke">
      <ShoppingProvider cart={0} productModel={""}>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </ShoppingProvider>
    </div>
  );
}

export default App;

import Search from './Search'
import Item from './Item'
import productListData from '../services/productListData';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProductList = () => {

  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    productListData().then(data => setItems(data))
  }, [])

  return (
    <section className='bg-whiteSmoke p-5 flex flex-col items-center'>
      <Search onSearchText={setSearchText} />
      <ul className='w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center xl:px-20'>
        {items
          .filter(item => item.model.toLowerCase().includes(searchText.toLowerCase()) || item.brand.toLowerCase().includes(searchText.toLowerCase()))
          .map((item) =>
          <Link key={item.id} to={`/product/${item.id}`}>
            <li key={item.id} className="w-56 h-80 p-5 m-2 bg-white rounded-md flex flex-col items-center hover:drop-shadow-md">
              <Item
                model={item.model}
                brand={item.brand}
                img={item.imgUrl}
                price={item.price}
                value={searchText}
              />
            </li>
            </Link>
          )
        }
      </ul>
    </section>
  )
}

export default ProductList;
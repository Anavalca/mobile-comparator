import Search from './Search'
import Item from './Item'
import productListData from '../services/productListData';
import { useEffect, useState } from "react";

const ProductList = () => {

  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    productListData().then(data => setItems(data))
  }, [])

  return (
    <section className='bg-red'>
      <Search onSearchText={setSearchText} />
      <ul className='flex flex-wrap'>
        {items
          .filter(item => item.model.toLowerCase().includes(searchText.toLowerCase()))
          .map((item) =>
            <li key={item.id} className="w-32 h-32 p-5 m-5">
              <Item
                model={item.model}
                img={item.imgUrl}
                value={searchText}
              />
            </li>
          )
        }
      </ul>
    </section>
  )
}

export default ProductList;
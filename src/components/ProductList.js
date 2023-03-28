import Search from './Search'
import Item from './Item'
import productListData from '../services/productListData';
import { useEffect, useState } from "react";

const ProductList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    productListData().then(data => setItems(data))
  }, [])

  return (
    <section>
      ProductList
      <Search />
      <ul>
        {items.map((item) =>
          <li key={item.id}> 
            <Item
              id={item.model}
              img={item.img}
            />
          </li>
        )}
      </ul>
    </section>
  )
}

export default ProductList;
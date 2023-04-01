import Search from './Search'
import Item from './Item'
import productListData from '../services/productListData';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProductList = () => {

  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    const time = new Date().getTime();
    const expireTime = time + (60 * 60000);

    const storageData = JSON.parse(localStorage.getItem("sesionData"));
    console.log(storageData)
    if (storageData && (storageData.expiredTime > time)) {
      setItems(storageData.productList)
    } else {
      productListData().then(data => {
        setItems(data)
        const sesionData = {
          productList: data,
          expiredTime: expireTime
        }
        if (items.length > 0) {
          localStorage.setItem("sesionData", JSON.stringify(sesionData));
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='bg-whiteSmoke p-5 flex flex-col items-center'>
      <Search searchText={searchText} onSearchText={setSearchText} />
      <ul className='w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center xl:px-20'>
        {items
          .filter(item => item.model.toLowerCase().includes(searchText.toLowerCase()) ||
            item.brand.toLowerCase().includes(searchText.toLowerCase()))
          .map((item) =>
            <Link key={item.id} to={`/product/${item.id}`}>
              <li className="w-56 h-80 p-5 m-2 bg-white rounded-md flex flex-col items-center hover:drop-shadow-md">
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
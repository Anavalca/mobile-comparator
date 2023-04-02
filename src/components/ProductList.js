import Search from './Search'
import Item from './Item'
import productListData from '../services/productListData'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const time = new Date().getTime()
    const expireTime = time + (60 * 60000)

    const storageData = JSON.parse(localStorage.getItem("productsList"))

    if (storageData && (storageData.expiredTime > time)) {
      setItems(storageData.productList)
    } else {
      productListData().then(data => {
        setItems(data)
        const sessionData = {
          productList: data,
          expiredTime: expireTime
        }

        localStorage.setItem("productsList", JSON.stringify(sessionData))
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='bg-whiteSmoke pt-4 3xl:px-[15%] flex flex-col items-center'>
      <Search searchText={searchText} onSearchText={setSearchText} />
      <ul className='w-fit mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 justify-items-center'>
        {items
          .filter(item => item.model.toLowerCase().includes(searchText.toLowerCase()) ||
            item.brand.toLowerCase().includes(searchText.toLowerCase()))
          .map((item) =>
            <Link key={item.id} to={`/product/${item.id}`}>
              <li className="w-72 md:w-60 h-80 p-5 m-2 bg-white rounded-md flex flex-col items-center hover:drop-shadow-md">
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
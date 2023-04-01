import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import productDetailsData from '../services/productDetailsData'
import Description from "./Description"
import Actions from "./Actions"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useShoppingContext } from './ShoppingContext'

const ProductDetails = () => {
  const [item, setItem] = useState()
  const { setProduct } = useShoppingContext()
  const product = useParams()

  useEffect(() => {
    productDetailsData(product.id)
      .then(data => setItem(data))
  }, [product.id])

  useEffect(() => {
    if (item) {
      setProduct(item.model)
    }
  }, [item, setProduct])

  return (
    <section className='bg-white h-auto m-5 flex flex-col items-center'>
      {item && (
        <div className=" w-full p-8 rounded-lg flex flex-col items-center md:flex-row md:justify-center gap-8 ">
          <img alt="" src={item.imgUrl} className='h-80' />
          <div>
            <Description product={item} />
            <Actions id={item.id} options={item.options} />
          </div>
        </div>
      )}
      <Link to='/' className="pb-4">
        <FontAwesomeIcon icon={faRotateLeft} className='fa-sm pr-2' />
        <span>Volver al listado completo</span>
      </Link>
    </section>
  )
}

export default ProductDetails
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import productDetailsData from '../services/productDetailsData';

const ProductDetails = (props) => {
  const [item, setItem] = useState([])

  const parameterId = useParams()
  const productId = parameterId.id

  useEffect(() => {
    productDetailsData(productId)
    .then(data => setItem(data))
  }, [productId])

  return (
    <>
      <img alt="" src={item.imgUrl} className='h-48'/>
      <h3 className="">{item.model}</h3>
    </>
  )
}

export default ProductDetails;
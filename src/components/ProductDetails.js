import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import productDetailsData from '../services/productDetailsData';
import Description from "./Description";
import Actions from "./Actions";

const ProductDetails = () => {
  const [item, setItem] = useState()
  const productId = useParams()

  useEffect(() => {
    productDetailsData(productId.id)
      .then(data => setItem(data))
  }, [productId.id])

  return (
    <section className='bg-whiteSmoke p-5 flex justify-center gap-8'>
      {item && (
        <>
          <img alt="" src={item.imgUrl} className='h-80' />
          <div>
            <Description product={item} />
            <Actions id={item.id} options={item.options} />
          </div>
        </>
      )}
    </section>
  )
}

export default ProductDetails;
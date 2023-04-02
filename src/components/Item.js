const Item = (props) => {
  const { model, img, brand, price } = props

  return (
    <>
      <img alt={`imagen ${model}`} src={img} className='h-48'/>
      <p className="text-sm pt-2">{brand}</p>
      <h2 className="text-lg">{model}</h2>
      <p className="text-3xl font-normal text-green">{price}<small>€</small></p>
    </>
  )
}

export default Item
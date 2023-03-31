const Item = (props) => {
  const { model, img, brand, price } = props;

  return (
    <>
      <img alt="" src={img} className='h-48'/>
      <h3 className="pt-3">{model}</h3>
      <p>{brand}</p>
      <p className="font-bold">{price}</p>
    </>
  )
}

export default Item;
const Item = (props) => {

  const { model, img } = props;

  return (
    <>
      <h3 className="">{model}</h3>
      <img alt="" src={img} className='h-20'/>
    </>
  )
}

export default Item;
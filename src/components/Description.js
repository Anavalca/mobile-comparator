const Description = ({ product }) => {
  const { model, brand, price, cpu, ram, networkTechnology, displayResolution, battery, primaryCamera, 
    secondaryCmera, dimentions, weight } = product

  return (
    <div className="flex flex-col ">
      <p className="">{brand}</p>
      <h3 className="">{model}</h3>
      <p className="">{price}</p>
      <p className="">{cpu}</p>
      <p className="">{ram}</p>
      <p className="">{networkTechnology}</p>
      <p className="">{displayResolution}</p>
      <p className="">{battery}</p>
      <p className="">{primaryCamera}</p>
      <p className="">{secondaryCmera}</p>
      <p className="">{dimentions}</p>
      <p className="">{weight}</p>
    </div>
  )
}

export default Description;
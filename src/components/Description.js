const Description = ({ product }) => {
  const { model, brand, price, cpu, ram, networkTechnology, displayResolution, battery, primaryCamera, 
    secondaryCmera, dimentions, weight } = product

  return (
    <div className="flex flex-col items-start">
      <p className="">{brand}</p>
      <h1 className="text-4xl pb-2">{model}</h1>
      <p className="text-4xl font-medium text-green">{price}<small>€</small></p>
      <p className="font-medium">Cpu: <span className="font-thin">{cpu}</span></p>
      <p className="font-medium">Ram: <span className="font-thin">{ram}</span></p>
      <p className="font-medium">Sistema Operativo: <span className="font-thin">{networkTechnology}</span></p>
      <p className="font-medium">Resolución: <span className="font-thin">{displayResolution}</span></p>
      <p className="font-medium">Batería: <span className="font-thin">{battery}</span></p>
      <p className="font-medium">Cámara Trasera: <span className="font-thin">{primaryCamera}</span></p>
      <p className="font-medium">Cámara delantera: <span className="font-thin">{secondaryCmera}</span></p>
      <p className="font-medium">Dimensiones: <span className="font-thin">{dimentions}</span></p>
      <p className="font-medium">Peso: <span className="font-thin">{weight}</span></p>
    </div>
  )
}

export default Description
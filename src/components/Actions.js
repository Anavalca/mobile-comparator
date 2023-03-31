import { useState } from "react";
import addProducts from '../services/addProducts'

const Actions = ({ id, options }) => {
  const { colors, storages } = options;

  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedStorage, setSelectedStorage] = useState(storages[0])
  const [shoppingCartCount, setShoppingCartCount] = useState()

  console.log(shoppingCartCount)

  const productData = {
    "id": id,
    "colorCode": selectedColor.code, 
    "storageCode": selectedStorage.code
  }

  const sendShoppingCart = async (e) => {
    e.preventDefault();
    setShoppingCartCount(await addProducts(productData))
  }

  return (
    <form onSubmit={sendShoppingCart} className="flex flex-col gap-4">
      <div>
        <p>Color:</p>
        {colors.map(color =>
          <button type="button" key={color.name}
            className={`p-2 mr-2 rounded border-2
            ${color.name === selectedColor.name ? "bg-black text-white" : "bg-white text-black"}`}
            onClick={() => setSelectedColor(color)}
          >
            {color.name}
          </button>
        )}
      </div>
      <div>
        <p>Almacenamiento:</p>
        {storages.map(storage =>
          <button type="button" key={storage.name}
            className={`p-2 mr-2 rounded border-2
            ${storage.name === selectedStorage.name ? "bg-black text-white" : "bg-white text-black"}`}
            onClick={() => setSelectedStorage(storage)}
          >
            {storage.name}
          </button>
        )}
      </div>
      <button className="bg-white rounded-full p-4" type="submit"
      >Enviar al carrito</button>
    </form>
  )
}

export default Actions;
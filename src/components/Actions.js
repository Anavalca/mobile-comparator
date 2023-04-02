import { useState } from "react"
import addProducts from '../services/addProducts'
import { useShoppingContext } from './ShoppingContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Actions = ({ id, options }) => {
  const { colors, storages } = options

  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedStorage, setSelectedStorage] = useState(storages[0])

  const { setShoppingCart } = useShoppingContext()

  const productData = {
    "id": id,
    "colorCode": selectedColor.code,
    "storageCode": selectedStorage.code
  }

  const sendShoppingCart = async (e) => {
    e.preventDefault()
    const cart = await addProducts(productData)
    setShoppingCart(cart.count)
    const time = new Date().getTime()
    const expireTime = time + (60 * 60000)
    const shoppingCartStorage = {
      cartNumber: cart.count,
      expiredTime: expireTime
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartStorage))
  }

  return (
    <form onSubmit={sendShoppingCart} className="flex flex-col gap-3">
      <div className="pt-3">
        <p>Color:</p>
        {colors.map(color =>
          <button type="button" key={color.name}
            className={`p-2 mr-2 rounded border-2
            ${color.name === selectedColor.name ? "bg-green text-white font-medium" : "bg-white text-black"}`}
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
            ${storage.name === selectedStorage.name ? "bg-green text-white font-medium" : "bg-white text-black"}`}
            onClick={() => setSelectedStorage(storage)}
          >
            {storage.name}
          </button>
        )}
      </div>
      <button className="bg-black text-white md:w-9/12 rounded-full p-4 mt-3 hover:bg-green" type="submit">
        <FontAwesomeIcon icon={faCartPlus} className='fa-lg px-2' />
        Añadir al carrito
      </button>
    </form>
  )
}

export default Actions
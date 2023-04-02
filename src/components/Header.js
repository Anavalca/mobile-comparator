import logo from '../images/movilfy-logo.png'
import { useEffect } from "react"
import { useShoppingContext } from './ShoppingContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { shoppingCart, product } = useShoppingContext()
  const { setShoppingCart } = useShoppingContext()

  useEffect(() => {
    const time = new Date().getTime()

    const shoppingCartStorage = JSON.parse(localStorage.getItem("shoppingCart"))

    if (shoppingCartStorage && (shoppingCartStorage.expiredTime > time)) {
      setShoppingCart(shoppingCartStorage.cartNumber)
    }
}, [setShoppingCart])

return (
  <header className=' bg-whiteSmoke flex flex-col'>
    <div className='w-full bg-green flex justify-between items-center p-3'>
      <a href='/'>
        <img alt="" src={logo} className="h-14 md:h-26" />
      </a>
      <span className='flex align-center'>
        <FontAwesomeIcon icon={faShoppingCart} className='fa-2xl px-2 text-white' />
        {shoppingCart > 0 && (
          <span className="rounded-full w-7 h-7 bg-black text-white text-sm font-medium -translate-x-4 -translate-y-3 flex justify-center items-center">{shoppingCart}</span>
        )}
      </span>
    </div>
    <nav className='pt-4 pl-4 bg-whiteSmoke'>
      <a href='/'>Listado móviles y tablets</a>
      {product && (
        <>
          <FontAwesomeIcon icon={faChevronRight} className='fa-sm px-2' />
          <span>{product}</span>
        </>
      )}
    </nav>
  </header>
)
}

export default Header
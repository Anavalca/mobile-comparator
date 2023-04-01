import logo from '../images/logo_mobile.png'
import { useShoppingContext } from './ShoppingContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const { shoppingCart, product } = useShoppingContext()

  return (
    <header className=' bg-whiteSmoke flex flex-col'>
      <div className='w-full bg-white flex justify-between p-4'>
        <a href='/'>
          <img alt="" src={logo} className="w-12" />
        </a>
        <span className='flex align-center'>
          <img alt="" src={logo} className="w-12" />
          {shoppingCart > 0 && (
            shoppingCart
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

export default Header;
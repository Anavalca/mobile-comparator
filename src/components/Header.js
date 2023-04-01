import logo from '../images/logo_mobile.png'
import { useShoppingContext } from './ShoppingContext';


const Header = () => {

  const { shoppingCart } = useShoppingContext()

  return (
    <header className='w-full bg-white flex items-center justify-between'>
      <a href='/'>
        <img alt="" src={logo} className="w-12" />
      </a>
      <nav>
        <a href='/'>Home</a>
        {/* <a href={productUrl}>Producto</a> */}
      </nav>
      <span>{shoppingCart}</span>
    </header>
  )
}

export default Header;
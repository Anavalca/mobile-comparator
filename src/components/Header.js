import logo from '../images/logo_mobile.png'

const Header = () => {

  return (
    <header className='w-full bg-white flex'>
      <a href='/'>
        <img alt="" src={logo} className="w-12"/>
      </a>
    </header>
  )
}

export default Header;
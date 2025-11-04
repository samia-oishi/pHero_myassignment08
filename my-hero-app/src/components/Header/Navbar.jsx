import {useState, useEffect} from 'react'
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const [active, setActive] = useState('Home');
  const location = useLocation();

  useEffect(() => {
      const path = location.pathname;
      if (path === '/myapps') {
        setActive('MyApps');
      } else if (path === '/') {
        setActive('Home');
      } else if (path === '/installation') {
        setActive('Installation');
      }else if (path.startsWith('/InstallationPage')) {
      setActive('Installation');
    }
    }, [location]);

  const navLinks = (
  <>
    <li onClick={() => setActive('Home')} className={active === 'Home' ? 'text-purple-700 border-b' : ''}>
      <Link to="/" className="hover:bg-transparent focus:bg-transparent active:bg-transparent">Home</Link>
    </li>
    <li onClick={() => setActive('MyApps')} className={active === 'MyApps' ? 'text-purple-700 border-b' : ''}>
      <Link to="/myapps" className="hover:bg-transparent focus:bg-transparent active:bg-transparent">Apps</Link>
    </li>
    <li onClick={() => setActive('Installation')} className={active === 'Installation' ? 'text-purple-700 border-b' : ''}>
      <Link to="/installation" className="hover:bg-transparent focus:bg-transparent active:bg-transparent">Installation</Link>
    </li>
  </>
);

  
  return (
    <>
    <div className="navbar bg-white shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
        {navLinks}
      </ul>
    </div>
    <div>
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="Hero.IO" className="w-10 h-10" />
        <span className="cursor-pointer text-purple-700 font-medium text-lg">Hero.IO</span>
      </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-br from-purple-700 via-purple-400 to-purple-500 outline-0 border-0 hover:bg-gradient-to-tl" href='https://github.com/samia-oishi' target='_blank'>
      <i className="fa-brands fa-github" aria-hidden="true"></i>Contribute</a>
  </div>
</div>
    </>
  )
}

export default Navbar;
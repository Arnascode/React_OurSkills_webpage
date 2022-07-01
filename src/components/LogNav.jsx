import { NavLink } from 'react-router-dom';

const LogNav = () => {
  return (
    <nav>
      <NavLink className='nav-link-logo' exact to='/'>
        <img className='logo' src='./img/img_flwr.gif' alt='log' />
      </NavLink>

      <NavLink className='nav-link' to='/login'>
        Login
      </NavLink>
      <NavLink className='nav-link' to='/register'>
        Register
      </NavLink>
    </nav>
  );
};

export default LogNav;

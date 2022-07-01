import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <img src='./img/img_flwr.gif' alt='Logo' />

      <NavLink className='nav-link' exact to='/'>
        Home
      </NavLink>
      <NavLink className='nav-link' to='/add'>
        Add
      </NavLink>
    </nav>
  );
};

export default MainNav;

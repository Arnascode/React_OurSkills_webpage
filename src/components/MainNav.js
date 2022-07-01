import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <img src='./img/img_flwr.gif' alt='Logo' />
      <div>
        <NavLink className='nav-link' exact to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link' to='/posts'>
          Add
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNav;

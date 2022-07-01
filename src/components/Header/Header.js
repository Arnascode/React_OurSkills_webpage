import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';

function Header(props) {
  const { isUserLoggedIn, logout, userEmail } = useAuthCtx();

  return (
    <header>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark '>
        <div className='container'>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto'>
              <NavLink className='nav-link' exact to={'/'}>
                <img src='./img/img_flwr.gif' alt='' srcset='' />
              </NavLink>
              {isUserLoggedIn && (
                <>
                  <NavLink className='nav-link' exact to={'/'}>
                    Home
                  </NavLink>
                  <NavLink className='nav-link' to={'/posts'}>
                    Posts
                  </NavLink>
                  <NavLink onClick={logout} className='nav-link' to={'/login'}>
                    Logout
                  </NavLink>
                </>
              )}
              {!isUserLoggedIn && (
                <>
                  <NavLink className='nav-link' to={'/login'}>
                    Login
                  </NavLink>
                  <NavLink className='nav-link' to={'/register'}>
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;

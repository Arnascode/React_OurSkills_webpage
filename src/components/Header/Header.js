import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './Header.module.css';

function Header(props) {
  const { isUserLoggedIn, logout, userEmail } = useAuthCtx();

  return (
    <header className={css.header}>
      <nav>
        <div>
          <div>
            <div>
              <NavLink className='nav-link' exact to={'/'}>
                <img className={css.img} src='./img/img_flwr.gif' alt='' srcset='' />
              </NavLink>
              {isUserLoggedIn && (
                <>
                  <NavLink className={css['nav-link']} exact to={'/'}>
                    Home
                  </NavLink>
                  <NavLink className={css['nav-link']} to={'/posts'}>
                    Posts
                  </NavLink>
                  <NavLink onClick={logout} className={css['nav-link']} to={'/login'}>
                    Logout
                  </NavLink>
                </>
              )}
              {!isUserLoggedIn && (
                <>
                  <NavLink className={css['nav-link']} to={'/login'}>
                    Login
                  </NavLink>
                  <NavLink className={css['nav-link']} to={'/register'}>
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

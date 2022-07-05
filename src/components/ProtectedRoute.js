import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../store/authContext';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;

  return (
    <Route {...rest}>
      {isUserLoggedIn ? (
        children
      ) : (
        <div className='container jumbotron'>
          <h1 className='text-center'>Please login</h1>
          <div className='alert alert-danger'>You are not logged in!!!</div>
          <Link to={'/login'}>Login here</Link>
        </div>
      )}
    </Route>
  );
}

export default ProtectedRoute;

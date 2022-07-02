import './App.css';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        {/* <ProtectedRoute path={'/add'}>
          <AddPage />
        </ProtectedRoute> */}
        <Route path={'/add'}>
          <AddPage />
        </Route>
        <ProtectedRoute exact path={'/'}>
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;

import MainNav from '../components/MainNav';
import { useAuthCtx } from '../store/authContext';

function HomePage() {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <div className='container jumbotron'>
      <MainNav />
      <h1 className='display-3'>HomePage</h1>
      {!isUserLoggedIn && (
        <p className='lead'>
          Jei norite pamatyti duomenis, būtinai prisijunkit prie musu puslapio
        </p>
      )}
      {isUserLoggedIn && <p className='lead'>Sveiki atvyke</p>}
    </div>
  );
}

export default HomePage;

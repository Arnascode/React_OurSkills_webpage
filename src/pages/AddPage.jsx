import MainNav from '../components/MainNav';
import { useAuthCtx } from '../store/authContext';

function AddPage() {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <div className='container jumbotron'>
      <MainNav />
      <h2>Add Page</h2>
      {!isUserLoggedIn && (
        <p className='lead'>Jei norit pridėti, būtinai prisijunkite.</p>
      )}
      {isUserLoggedIn && <p className='lead'>Sveiki atvyke</p>}
    </div>
  );
}

export default AddPage;

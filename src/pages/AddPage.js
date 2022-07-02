import MainNav from '../components/MainNav';
import { useAuthCtx } from '../store/authContext';

function AddPage() {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <div className='container jumbotron'>
      <h1 className='text-center'>Add Page</h1>
      {!isUserLoggedIn && (
        <p className='lead'>Jei norit pridėti, būtinai prisijunkite.</p>
      )}
      <form action=''></form>
    </div>
  );
}

export default AddPage;

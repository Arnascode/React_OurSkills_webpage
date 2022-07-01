// import MainNav from '../components/MainNav';
// import { useAuthCtx } from '../store/authContext';

// function AddPage() {
//   const { isUserLoggedIn } = useAuthCtx();

//   return (
//     <div className='container jumbotron'>
//       <MainNav />
//       <h2>Add Page</h2>
//       {!isUserLoggedIn && (
//         <p className='lead'>Jei norit pridėti, būtinai prisijunkite.</p>
//       )}
//       {isUserLoggedIn && <p className='lead'>Sveiki atvyke</p>}
//     </div>
//   );
// }

// export default AddPage;

import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';
import { baseUrl, myFetchAuth } from '../utils';
import { useAuthCtx } from '../store/authContext';
import { Link, Route, useHistory } from 'react-router-dom';

function AddPage() {
  const history = useHistory();
  const { token } = useAuthCtx();
  if (!token) history.push('/login');
  // console.log('token ===', token);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const fetchResult = await myFetchAuth(`${baseUrl}/v1/content/skills`, token);
    console.log('fetchResult ===', fetchResult);
    if (Array.isArray(fetchResult)) {
      setPosts(fetchResult);
    }
  };

  useEffect(() => {
    if (token) getPosts();
  }, []);

  return (
    <div className='container'>
      <h1 className='display-4 py-4'>Our Posts</h1>
      <Link to='/posts/bubble'>Go to bubble</Link>
      <Route path='/posts/bubble'>
        <h2>I am bubble page section</h2>
      </Route>
      <div className='d-flex flex-wrap gap-1'>
        {posts.map((pObj) => (
          <Card key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
}

export default AddPage;

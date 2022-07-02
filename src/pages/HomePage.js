import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';
import { baseUrl, myFetchAuth } from '../utils';
import { useAuthCtx } from '../store/authContext';
import { useHistory } from 'react-router-dom';
import css from './css/Home.module.css';

function HomePage() {
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
    <div className={css.center}>
      <h1 className='text-center'>Our Posts</h1>

      <div className={css.container}>
        {posts.map((pObj) => (
          <Card key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

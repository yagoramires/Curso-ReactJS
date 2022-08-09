import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PostDetail from '../../components/PostDetail/PostDetail';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import styles from './Home.module.css';

const Home = () => {
  const [query, setQuery] = useState();

  const { documents: posts, loading } = useFetchDocuments('posts');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <section className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ou busque por tags...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div>
        {loading && <p>Carregando ...</p>}
        {posts && posts.map((post) => <PostDetail post={post} key={post.id} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <h2>Posts ...</h2>
            <p>Não foram encontrados posts</p>
            <Link to='posts/create' className='btn btn-outline'>
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;

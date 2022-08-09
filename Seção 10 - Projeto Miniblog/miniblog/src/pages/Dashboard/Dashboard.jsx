import React from 'react';

import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // user posts
  const { documents: posts, loading } = useFetchDocuments('posts', null, uid);
  // const posts = []

  // delete
  const handleDelete = () => {};

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {loading && <p>Carregando posts</p>}
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to='/posts/create' className='btn btn-outline'>
            Crie seu primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Título </span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className='btn btn-outline'>
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className='btn btn-outline'
                  >
                    Editar
                  </Link>
                  <button
                    onClick={handleDelete}
                    className='btn btn-outline btn-danger'
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;

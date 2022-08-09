import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import styles from './Post.module.css';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <section className={styles.post}>
      {loading && <p>Carregando detalhes do post...</p>}
      {post && (
        <>
          <span>
            Por <span>{post.createdBy}</span>
          </span>
          <img src={post.image} alt={post.title} />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div>
            {post.tagsArray.map((tag) => (
              <p>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Post;

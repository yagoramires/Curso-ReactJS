import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostDetail.module.css';

const PostDetail = ({ post }) => {
  return (
    <div className={styles.postDetail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <div>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`posts/${post.id}`}></Link>
    </div>
  );
};

export default PostDetail;

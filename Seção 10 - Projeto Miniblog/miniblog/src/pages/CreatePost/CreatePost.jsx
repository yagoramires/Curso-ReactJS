import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

import styles from './CreatePost.module.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { insertDocument, response } = useInsertDocument('posts');
  const { user } = useAuthValue();

  const navigate = useNavigate();

  //definir vars

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // validate image URL

    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser um link.');
    }

    // create tag array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    // check all values
    if (!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos!');
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    //redirect

    navigate('/');
  };

  return (
    <section className={styles.createPost}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Pense em um título'
            required
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type='text'
            name='image'
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder='Insira a URL da imagem que represente o seu post'
            required
          />
        </label>

        <label>
          <span>Título</span>
          <textarea
            name='body'
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder='Insira o conteúdo do post'
            required
            maxLength={150}
          />
        </label>
        <label>
          <span>Tags da imagem:</span>
          <input
            type='text'
            name='tags'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            placeholder='Insira as Tags separadas por vírcula'
            required
          />
        </label>
        {!response.loading && <button className='btn btn-dark'>Postar</button>}
        {response.loading && (
          <button className='btn' disabled>
            Aguarde ...
          </button>
        )}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <div className='error'>{formError}</div>}
      </form>
    </section>
  );
};

export default CreatePost;

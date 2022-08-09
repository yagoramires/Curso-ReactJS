import { Link } from 'react-router-dom';
// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
// components
import PostDetail from '../../components/PostDetail/PostDetail';

import styles from './Search.module.css';

const Search = () => {
  const query = useQuery();
  const search = query.get('q'); // baseado no parametro passsado atraves da URL search?q= [search? -> q <- =]

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div className={styles.search}>
      <h2>Resultados da busca</h2>
      <div>
        {posts && posts.map((post) => <PostDetail post={post} key={post.id} />)}

        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca ...</p>
            <Link to='/' className='btn btn-dark'>
              Voltar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

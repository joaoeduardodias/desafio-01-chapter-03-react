import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className={`${commonStyles.container} ${styles.postContainer}`}>
        <Link href="/">
          <a className={styles.post}>
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <ul>
              <li>
                <time>
                  <FiCalendar />
                  15 Mar 2021
                </time>
              </li>
              <li>
                <FiUser />
                João Dias
              </li>
            </ul>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.post}>
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <ul>
              <li>
                <time>
                  <FiCalendar />
                  15 Mar 2021
                </time>
              </li>
              <li>
                <FiUser />
                João Dias
              </li>
            </ul>
          </a>
        </Link>
        <button type="button" className={styles.loadPosts}>
          Carregar mais posts
        </button>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };

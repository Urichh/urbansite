import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.background}>
      <Head>
        <title>hi</title>
        <meta name="description" content="urbansite" />
      </Head>
      <div className={styles.main}>
        <main>
          <h1>Hallo :)</h1>
        </main>
      </div>
    </div>
  );
}
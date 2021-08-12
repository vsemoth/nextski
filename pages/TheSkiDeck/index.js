import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const SkiDeck = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Ski Deck</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>The Ski Deck</h1>
        <p>Welcome to The Ski Deck's website.</p>
      </main>
    </div>
  );
};

export default SkiDeck;

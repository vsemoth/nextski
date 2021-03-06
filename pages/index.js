import Head from "next/head";
import Footer from "./../components/Footer";
import Link from "next/dist/client/link";
import styles from "./../styles/Home.module.css";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();

  if (process.browser || typeof window !== "undefined") {
    console.log(window.location.protocol + `//` + window.location.host)
    if(window.location.host == "ski.co.za") {
      router.push(`TheSkiDeck`);
    } else if (window.location.host == "kidsfunparties.co.za") {
      router.push(`KidsFunParties`)
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>The Ski Deck Router</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <Link href="https://ski.co.za">
            <a>The Ski Deck</a>
          </Link>
        </h1>

        <div className={styles.grid}>
          <h3>How can we help you?</h3>
          <ul>
            <li>
              <Link href="/TheSkiDeck">
                <a>Ski Lessons</a>
              </Link>
            </li>
            <li>
              <Link href="/TheSkiDeck">
                <a>Ski Clothing</a>
              </Link>
            </li>
            <li>
              <Link href="/KidsFunParties">
                <a>Kids Fun Parties</a>
              </Link>
            </li>
            <li>
              <Link href="/KidsFunParties">
                <a>Family Fun</a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

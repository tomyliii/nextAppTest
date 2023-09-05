import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Blog</title>
      </Head>
      <main className={styles.container}>
        <div>
          <h1>Bienvenue sur Code.io</h1>
          <p>Le blog communautaire des afficionados de développement web</p>
        </div>
        <div>
          <div>
            <h2>Lisez les articles</h2>
            <p>Maximisez votre culture web</p>
            <p>
              Chaque auteur tente de vous apporter le plus de valeurs possible
              par article
            </p>
            <Link href="/blog">Visit le blog</Link>
          </div>
          <div>
            <h2>Faites un tour vers la liste de membres</h2>
            <p>faites vous des amis</p>
            <p>Ajoutez, invitez et discutez avec les différents memebres.</p>
            <Link href="/list">Découvre la liste de membres</Link>
          </div>
        </div>
      </main>
    </>
  );
}

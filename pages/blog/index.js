import React from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";
export default function index(props) {
  return (
    <>
      <Head>
        <title>Le Blog</title>
      </Head>
      <main className={styles.container}>
        <div>
          <h1>Bienvenue sur le Blog.</h1>
          <p>Voici les articles</p>
        </div>
        <div>
          {props.articles.map((article) => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body.slice(0, 20)} ...</p>
              <Link href={`/blog/${article.title}`}>Lire cet article</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // console.log(fetchData.data);
    if (fetchData.data.length === 0) {
      return { notFound: true };
    }
    return { props: { articles: fetchData.data } };
  } catch (error) {
    console.log(error);
  }
}

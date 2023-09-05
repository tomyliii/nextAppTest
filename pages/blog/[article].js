import React from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/Article.module.css";
export default function Article(props) {
  const router = useRouter();
  const article = props.article;
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <main className={styles.container}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const slug = context.params.article;
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const articleToDisplay = fetchData.data.find(
      (article) => article.title === slug
    );
    if (!articleToDisplay) {
      return { notFound: true };
    }

    return { props: { article: articleToDisplay } };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  try {
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const paths = fetchData.data.map((article) => ({
      params: { article: article.title },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

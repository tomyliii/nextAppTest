import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/List.module.css";
export default function index(props) {
  return (
    <>
      <Head>
        <title>Liste d utilisateurs</title>
      </Head>
      <main className={styles.container}>
        <div>
          <h1>Liste des utilisateurs</h1>
        </div>
        <div>
          {props.list.map((user) => (
            <div key={user.id}>
              <p>{user.username}</p>
              <Link href={`/list/${user.username}`}>Contacter</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    console.log(context);
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (fetchData.data.length === 0) {
      return { notFound: true };
    }
    // console.log(fetchData.data);
    return { props: { list: fetchData.data } };
  } catch (error) {
    console.log(error);
  }
}

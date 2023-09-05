import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import styles from "../../styles/User.module.css";
export default function User(props) {
  const user = props.user;
  const router = useRouter();
  //   console.log(router);
  return (
    <>
      <Head>
        <title>{user.name}</title>
      </Head>
      <main className={styles.container}>
        <div>
          <h1>{user.name}</h1>
          <p>Username: &nbsp; {user.username}</p>
          <ul>
            <li>Username: &nbsp; {user.username}</li>
            <li>Email: &nbsp; {user.email}</li>
            <li>Site Web: &nbsp; {user.website}</li>
            <li>Téléphone: &nbsp; {user.phone}</li>
          </ul>
        </div>
      </main>
    </>
  );
}
export async function getStaticProps(context) {
  try {
    console.log(context);
    const slug = context.params.user;
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userToDisplay = fetchData.data.find((user) => user.username === slug);
    if (!userToDisplay) {
      return { notFound: true };
    }
    return { props: { user: userToDisplay } };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  try {
    const fetchData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(fetchData);
    const paths = fetchData.data.map((user) => ({
      params: { user: user.username },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

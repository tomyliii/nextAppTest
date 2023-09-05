import "@/styles/globals.css";
import Container from "@/Components/Container/Container";

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

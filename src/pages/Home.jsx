import { Navbar, Main, Product, Footer } from "../components";
import Chat from "../components/chat"; // Import Chat properly

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
      <Chat />
    </>
  );
}

export default Home;

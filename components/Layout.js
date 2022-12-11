import NavBar from "./sharedComponents/Header";
import Footer from "./sharedComponents/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

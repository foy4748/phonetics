import NavBar from "./sharedComponents/Header";
import Footer from "./sharedComponents/Footer";

import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </>
  );
}

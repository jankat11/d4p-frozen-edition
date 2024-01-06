import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  /* (initialLoad && isHomePage) && "opacity-0" */
  return (
    <>
      <header className={` w-full z-30 absolute`}>
        <Header />
      </header>
      <main className={`bg-white text-dallas h-full w-full`}>{children}</main>
      <footer className="bg-white">
        <Footer />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

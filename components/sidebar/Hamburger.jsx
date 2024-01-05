const Hamburger = ({ classes }) => {
  return (
    <section  className="hamburger cursor-pointer">
      <span className={`hamburger-top ${classes}`}></span>
      <span className={`hamburger-middle ${classes}`}></span>
      <span className={`hamburger-bottom ${classes}`}></span>
    </section>
  );
};
export default Hamburger;

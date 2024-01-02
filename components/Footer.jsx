import Image from "next/image";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 border-t border-t-neutral bg-aside text-napa rounded font-raleway">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Terms</a>
      </nav>
      <nav>
        <SocialIcons classes="" color="#AC9C8C" size={25} />
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by design4theplanet</p>
      </aside>
    </footer>
  );
};
export default Footer;

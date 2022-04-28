import CTAButton from "./CTAButton";
import "./header.css";
import ME from "../../assets/me-detailed.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Victor Alarcon</h2>
        <h5 className="text-light">Front-End Developer</h5>
        <CTAButton />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsFileCode } from "react-icons/bs";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(true); 
      } else { // if scroll up show the navbar
        setShow(false);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={show ? 'hidden' : ''}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={`${activeNav === "#" ? "active" : ""}`}
      >
        <p>Home</p>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <p>About me</p>
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("skills")}
        className={activeNav === "skills" ? "active" : ""}
      >
        <p>Skills</p>
        <AiOutlineStar />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("projects")}
        className={activeNav === "projects" ? "active" : ""}
      >
        <p>Projects</p>
        <BsFileCode />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <p>Contact</p>
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;

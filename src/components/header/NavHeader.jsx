import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsFileCode } from "react-icons/bs";

const NavHeader = () => {
  return (
    <nav className="nav_header">
      <a href="#">
          <p>Home</p>
        <AiOutlineHome />
      </a>
      <a href="#">
          About Me
        <AiOutlineUser />
      </a>
      <a href="#">
          Skills
        <AiOutlineStar />
      </a>
      <a href="#">
          Projects
        <BsFileCode />
      </a>
      <a href="#">
          Contact
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default NavHeader;

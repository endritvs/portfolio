import { useState } from "react";
import { Link } from "react-scroll";
import "../assets/style/navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <div>
        <h4 className="logo">
          {"<"}
          <span style={{ color: "#FEB139", fontFamily: "monospace" }}>
            endrit's portfolio
          </span>
          {"/>"}
        </h4>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              {"<"}
              <span style={{ color: "#FEB139", fontFamily: "monospace" }}>
                Home
              </span>
              {"/>"}
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              {"<"}
              <span style={{ color: "#FEB139", fontFamily: "monospace" }}>
                About
              </span>
              {"/>"}
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true}>
              {"<"}
              <span style={{ color: "#FEB139", fontFamily: "monospace" }}>
                Projects
              </span>
              {"/>"}
              {/* </a> */}
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true}>
              {"<"}
              <span style={{ color: "#FEB139", fontFamily: "monospace" }}>
                Contact
              </span>
              {"/>"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import logoEP from "../assets/img/ep.png";
import pro from "../assets/img/pro.png";
import mern from "../assets/img/mern.png";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { DiPhp, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import axios from "axios";
import GitCard from "./GitCard";

function About() {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="about">
      <div className="center-100 home">
        <div className="center-100 mt">
          <h1
            style={{
              width: "100%",
            }}
            className="center text text-center text-white mb typing-size"
          >
            {"<"}More interesting about <span className="yellowMe">ME</span>
            {"/>"}
          </h1>
        </div>

        <h3 className="center text text-justify text-white typing-size">
          <ol>
            <li className="text text-white skills">
              Skilled in designing, testing, and developing software.
            </li>
            <li className="text text-white skills">
              Knowledgeable of{" "}
              <span className="yellowMe">full-stack development</span> best
              practices.
            </li>
            <li className="text text-white skills">
              Continuing to learn new languages and development.
            </li>
          </ol>
        </h3>

        <div className="center-100">
          <div className="flex-container">
            <div className="center-100 epDiv">
              <img className="logoEP" src={logoEP} alt="logoEP" />
            </div>
            <div className="center-100">
              <p className="text text-white  description-work">
                <span className="yellowMe"> WEB DEVELOPER (EUROPIXEL)</span> -
                In EUROPIXEL I had the role of an intern where I also
                participated in their real projects of the company, my role was
                mostly in the part of FRONT-END DEVELOPER where I showed myself
                on sites like: GERMAN EYE CLINIC, HEROINATES, NOBELPRESS and
                many other sites
              </p>
            </div>
          </div>
        </div>

        <div className="center-100">
          <div className="flex-containerPro">
            <div className="center-100">
              <p className="text text-white  description-work">
                <span className="yellowMe">
                  {" "}
                  Probit Academy (FULL-STACK DEVELOPER)
                </span>{" "}
                - Finished Trainings: 1. Web Development Basics (HTML, CSS,
                JavaScript, jQuery) 2. Web Development Basics(PHP & MySQL) 3.
                Web Development with real project 4. Bootstrap 5 5. Git, 6. OOP
                PHP and MySQL 7. WordPress Administration 8. Laravel
              </p>
            </div>
            <div className="center-100 probitD">
              <img className="logoEP" src={pro} alt="logoEP" />
            </div>
          </div>
        </div>
        <div className="center-100">
          <div className="flex-container">
            <div className="center-100 epDiv">
              <img className="logoEP" src={mern} alt="logoEP" />
            </div>
            <div className="center-100">
              <p className="text text-white  description-work">
                <span className="yellowMe">MERN STACK (UDEMY)</span> - Learn how
                to build big full stack app from scratch Learn how to connect
                Front-End application (React) with Backend application (Express,
                MongoDB, NodeJS) Learn how to implement JWT for authentication
                and authorization Learn how to implement React Hooks,
                Async/Await, React Router 6, Axios Learn how to implement ES6 in
                Node Learn best practices of Front-End and Server applications
              </p>
            </div>
          </div>
        </div>
        <div className="center-100 mt">
          <h1
            style={{
              width: "100%",
              marginTop: "150px",
            }}
            className="center text text-center text-white mb typing-size"
          >
            {"<"}Technologies I have{" "}
            <span className="yellowMe">EXPERIENCE!</span>
            {"/>"}
          </h1>
        </div>
        <div className="cards" style={{ marginBottom: "150px" }}>
          <div className="card">
            <DiNodejsSmall className="skill-icons" />
          </div>
          <div className="card">
            <FaLaravel className="skill-icons" />
          </div>
          <div className="card">
            <DiPhp className="skill-icons" />
          </div>
          <div className="card">
            <DiReact className="skill-icons" />
          </div>
          <div className="card">
            <DiMongodb className="skill-icons" />
          </div>
          <div className="card">
            <BsWordpress className="skill-icons" />
          </div>
        </div>
        <div className="projects">
          <div className="center-100 mt">
            <h1
              style={{
                width: "100%",
              }}
              className="center text text-center text-white mb typing-size"
            >
              {"<"}
              <span className="yellowMe">Projects </span>I made!{"/>"}
            </h1>
          </div>
          <div className="search">
            <input
              style={{
                border: "1px solid #fff",
                borderRadius: "20px",
                padding: "10px",
                width: "260px",
              }}
              className="center text text-center text-white mb"
              type="search"
              placeholder="Search for endritvs in github..."
              value={searchInput}
              onChange={handleChange}
            />
            <button onClick={handleClick}>Search</button>
          </div>

          <GitCard repos={repos} />
        </div>
        <div className="contact">
          <div className="center-100 mt">
            <h1
              style={{
                width: "100%",
              }}
              className="center text text-center text-white mb typing-size"
            >
              {"<"}Connect with <span className="yellowMe">ME</span>
              {">"}
            </h1>
          </div>
          <div className="connect-me">
            <a href="https://github.com/endritvs">
              <AiFillGithub style={{ color: "white" }} />
            </a>
            <a
              className="a-icon-linkedin"
              href="https://www.linkedin.com/in/endrit-saiti/"
            >
              <AiOutlineLinkedin style={{ color: "white" }} />
            </a>
            <a className="a-icon-google" href="mailto:endritsaiti8@gmail.com">
              <SiGmail style={{ color: "white" }} />
            </a>
          </div>
          <div className="center-100 mt">
            <p className="yellowMe center text text-center mb typing-size">
              Feel free to contact me!
            </p>
            <h1
              style={{
                width: "100%",
              }}
              className="center text text-center text-white mb typing-size"
            >
              {"<"}Connect with <span className="yellowMe">ME</span>
              {"/>"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

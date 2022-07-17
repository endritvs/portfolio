import React from "react";
import foto from "../img/foto2.png";
import "../style/home.css";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <div className="home">
      <img className="center img" src={foto} alt="first" />
      <div style={{ fontSize: "45px" }} className="connect-me">
        <a href="https://github.com/endritvs">
          <AiFillGithub style={{ color: "white" }} />
        </a>
        <a
          className="a-icon-linkedin"
          href="https://www.linkedin.com/in/endrit-saiti/"
        >
          <AiOutlineLinkedin style={{ color: "#0072b1" }} />
        </a>
        <a className="a-icon-google" href="mailto:endritsaiti8@gmail.com">
          <SiGmail style={{ color: "#c71610" }} />
        </a>
      </div>
      <div className="center-100">
        <h1 className="center text text-center text-white typing-demo ">
          {"< "} Hello I'm{" "}
          <span style={{ color: "#FEB139", fontFamily: "monospace" }}>
            Endrit Saiti!
          </span>
          {" />"}
        </h1>
        <h4
          style={{ marginTop: "35px" }}
          className="center text text-justify text-white"
        >
          {"< "}An Enthusiast of programming! A person who fixes a problem that
          you don't know you have, in a way you don't understand!{"/>"}
        </h4>{" "}
        {/* <div className="text-vertical icons">
          <a className="a-icon-git" href="https://github.com/endritvs">
            <AiFillGithub style={{ color: "white" }} className="fa-icons" />
          </a>
          <a
            className="a-icon-linkedin"
            href="https://www.linkedin.com/in/endrit-saiti/"
          >
            <AiOutlineLinkedin
              style={{ color: "#0072b1" }}
              className="fa-icons"
            />
          </a>
          <a className="a-icon-google" href="mailto:endritsaiti8@gmail.com">
            <SiGmail style={{ color: "#c71610" }} className="fa-icons" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Home;

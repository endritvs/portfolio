import React from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
const GitCard = (props) => {
  const { repos } = props;

  return (
    <div>
      <div className="cards">
        {repos.length !== 0 ? (
          repos.data.map((item) => (
            <div className="card-project">
              <a href={item.html_url}>
                <h3 className="text text-blue" key={item.id}>
                  <RiGitRepositoryFill
                    style={{ color: "gray", background: "white" }}
                  />
                  {item.name}
                </h3>
              </a>
              <AiFillGithub
                style={{ color: "black", background: "white" }}
                className="fa-icons"
              />
            </div>
          ))
        ) : (
          <div className="card-project">
            <h3 className="text text-blue">
              Search for{" "}
              <span style={{ background: "white" }} className="yellowMe">
                {"'"}endritvs{"'"}
              </span>{" "}
              if you want to see my repositories!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitCard;

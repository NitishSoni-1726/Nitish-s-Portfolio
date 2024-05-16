import React, { useContext } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { mode } = useContext(AppContext);

  return (
    <>
      <div
        className={`border-top cursor w-100 d-flex flex-column justify-content-center align-items-center bg-transparent m-0 text-${
          mode ? "light" : "dark"
        }`}
        style={{ paddingTop: "10px", paddingBottom: "60px" }}
      >
        <div className="w-100 mb-4 d-flex flex-wrap justify-content-evenly">
          <div
            className="p-0 m-0 d-flex flex-column align-items-center mt-3"
            style={{ maxWidth: 960 }}
          >
            <h6 className="p-0 m-0 align-self-start">
              {"<" + "Nitish's Portfolio" + "/>"}
            </h6>
            <p className="m-0 p-0" style={{ maxWidth: 320 }}>
              A web developer on a mission to bring ideas to life through
              elegant code. With a passion for innovation, I craft digital
              experiences that captivate and inspire.
            </p>
          </div>
          <div className="p-0 m-0 d-flex flex-column align-items-center mt-3">
            <h6 className="m-0 p-0 pb-1 w-100 text-center">Social</h6>
            <div className="d-flex justify-content-center w-100 p-0 m-0">
              <a
                href="https://github.com/NitishSoni-1726"
                className={`m-1 text-${mode ? "light" : "dark"}`}
                style={{ fontSize: "20px", cursor: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/-nitish-soni-/"
                className={`m-1 text-${mode ? "light" : "dark"}`}
                style={{ fontSize: "20px", cursor: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="m-0 p-0">
          <p
            style={{ fontSize: "12px", fontWeight: "600" }}
            className="m-0 p-0 d-flex flex-column align-items-center"
          >
            <span>👨‍💻 Code crafted by Nitish Soni. © 2024.</span>
            <span>Steal with style, but credit the wizard !</span>
          </p>
        </div>
      </div>
    </>
  );
}

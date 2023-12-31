import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fetchFooterDetails } from "../functions/FirebaseFetch.js";

export default function Footer() {
  const { mode } = useContext(AppContext);
  const { websiteName } = useContext(AppContext);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const footerDetails = await fetchFooterDetails();
        setData(footerDetails);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data.footerDescription ? (
        <div
          className={`cursor w-100 d-flex flex-column justify-content-center align-items-center bg-transparent m-0 text-${
            mode ? "light" : "dark"
          }`}
          style={{ paddingTop: "10px", paddingBottom: "60px" }}
        >
          <div className="w-100 mb-4 d-flex flex-wrap justify-content-evenly">
            <div
              className="p-0 m-0 d-flex flex-column align-items-center mt-3"
              style={{ maxWidth: 960 }}
            >
              <h6 className="p-0 m-0 align-self-start">{websiteName}</h6>
              <p className="m-0 p-0" style={{ maxWidth: 320 }}>
                {data.footerDescription}
              </p>
            </div>
            <div className="p-0 m-0 d-flex flex-column align-items-center mt-3">
              <h6 className="m-0 p-0 pb-1 w-100 text-center">Social</h6>
              <div className="d-flex justify-content-center w-100 p-0 m-0">
                <a
                  href={data.socialMediaLinks.github}
                  className={`m-1 text-${mode ? "light" : "dark"}`}
                  style={{ fontSize: "20px", cursor: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={data.socialMediaLinks.linkedIn}
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
              {data.footerEnd.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

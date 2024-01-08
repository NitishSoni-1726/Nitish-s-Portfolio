import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import aboutImage from "../assets/images/aboutImage.jpeg";
import { motion } from "framer-motion";
import WorkExperienceCard from "../components/WorkExperienceCard";
import Loader from "../components/Loader";
import { fetchAboutPageDetails } from "../functions/FirebaseFetch";

export default function About() {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutDetails = await fetchAboutPageDetails();
        setData(aboutDetails);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  setTimeout(() => {
    setLoading(true);
  }, 500);

  return (
    <>
      {loading ? (
        <div
          className={`p-3 d-flex flex-column align-items-center text-${
            mode ? "light" : "dark"
          }`}
          style={{ overflowX: "hidden" }}
        >
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
              className="p-3 pt-0"
              src={aboutImage}
              alt="..."
              style={{ width: "350px", height: "450px", borderRadius: "40px" }}
            ></motion.img>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ width: "370px" }}
              className="p-4 d-flex justify-content-center flex-column align-items-center"
            >
              {data.aboutDescription.map((item, index) => {
                return (
                  <p className="text-center" key={index}>
                    {item}
                  </p>
                );
              })}
            </motion.div>
          </div>
          <div>
            {data.workExperience.map((item) => {
              return <WorkExperienceCard data={item} key={item.id} />;
            })}
          </div>
        </div>
      ) : (
        <Loader mode={mode} />
      )}
    </>
  );
}

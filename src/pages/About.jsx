import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import aboutImage from "../assets/images/aboutImage.jpeg";
import { motion } from "framer-motion";
import WorkExperienceCard from "../components/WorkExperienceCard";
import Loader from "../components/Loader";
import { data } from "../data/Data";

export default function About() {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

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
              <p className="text-center">
                Hello World ! I'm Nitish Soni. I'm your friendly neighborhood
                Front - End Developer, weaving code into captivating online
                experiences.
              </p>
              <p className="text-center">
                But wait, there's more to the story. While I groove to the
                front-end beats, I'm also dipping my toes into the backend pool,
                exploring the fascinating world of server-side.
              </p>
              <p className="text-center">
                Think of me as a coding artist in the making, sculpting digital
                landscapes that are both functional and visually pleasing. If
                you're up for an adventure in web development where every line
                of code is a stroke of creativity, let's team up and build
                something awesome!
              </p>
            </motion.div>
          </div>
          <div className="mt-4">
            <h3>Professional Experience</h3>
          </div>
          <div style={{ maxWidth: "600px", width: "100%" }}>
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

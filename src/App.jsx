import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume";
import ModeToggle from "./components/ModeToggle";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";
import { fetchWebsiteName } from "./functions/FirebaseFetch";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
export const AppContext = React.createContext({});

export default function App() {
  const [mode, setMode] = useState(false);
  const [websiteTitle, setWebsiteTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const websiteName = await fetchWebsiteName();
        setWebsiteTitle(websiteName);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {websiteTitle !== "" ? (
        <AppContext.Provider
          value={{
            mode: mode,
            setMode,
            websiteName: websiteTitle,
          }}
        >
          <BrowserRouter>
            <CursorFollower />
            <div
              className={`w-100 ${mode ? "bg-dark" : "bg-light"} m-0 p-0`}
              style={{ height: "100vh", overflow: "scroll", width: "100%" }}
            >
              <Navbar />
              <ModeToggle />
              <div
                className="d-flex justify-content-center w-100 bg-transparent cursor"
                style={{
                  marginTop: "55px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/portfolio" element={<Portfolio />}></Route>
                  <Route path="/blogs" element={<Blogs />}></Route>
                  <Route path="/resume" element={<Resume />}></Route>
                  <Route path="/console" element={<Admin />}></Route>
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <Loader />
      )}
    </>
  );
}

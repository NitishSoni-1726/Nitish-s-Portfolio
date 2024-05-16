import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "../components/Loader";
import { handleSubmit } from "../functions/PagesFunction";

const Admin = () => {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [loginLoader, setLoginLoader] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const email = React.createRef();
  const password = React.createRef();

  setTimeout(() => {
    setLoading(true);
  }, 500);

  return (
    <>
      {loading ? (
        <div
          style={{ height: "88vh", width: "100%" }}
          className={`d-flex flex-column align-items-center justify-content-center text-${
            mode ? "light" : "dark"
          }`}
        >
          <div
            className={`rounded border border-${
              mode ? "light" : "dark"
            } p-5 d-flex flex-column align-items-center`}
          >
            <h2>Login</h2>
            <form
              name="loginForm"
              className="d-flex flex-column align-items-center"
              onSubmit={async (event) => {
                event.preventDefault();
                setLoginLoader(true);
                const response = handleSubmit(
                  email.current.value,
                  password.current.value
                );
                setTimeout(() => {
                  setLoginLoader(false);
                  setLoginMessage(response);
                }, 1000);
              }}
            >
              <label
                className="d-flex flex-column m-2 mb-1"
                style={{ width: "250px", cursor: "none" }}
              >
                E-mail
                <input
                  ref={email}
                  type="email"
                  className={`p-1 mt-1 rounded bg-transparent text-${
                    mode ? "light" : "dark"
                  } border border-${mode ? "light" : "dark"}`}
                  style={{ cursor: "none" }}
                  required
                />
              </label>
              <label
                className="d-flex flex-column m-2 mt-1"
                style={{ width: "250px", cursor: "none" }}
              >
                Password
                <input
                  ref={password}
                  type="password"
                  className={`p-1 mt-1 rounded bg-transparent text-${
                    mode ? "light" : "dark"
                  } border border-${mode ? "light" : "dark"}`}
                  style={{ cursor: "none" }}
                  required
                />
              </label>
              <p
                style={{ fontWeight: 500, fontSize: "15px" }}
                className={`text-${
                  loginMessage === "Success" ? "success" : "danger"
                } m-0 p-0`}
              >
                {loginMessage}
              </p>
              <button
                type="submit"
                className="btn btn-danger mt-2"
                style={{ width: "250px", cursor: "none" }}
              >
                {loginLoader ? "Validating..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Loader mode={mode} />
      )}
    </>
  );
};

export default Admin;

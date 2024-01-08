import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "../components/Loader";
import { handleSubmit } from "../functions/PagesFunction";

const Admin = () => {
  const { mode } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
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
          style={{ height: "85vh", width: "100%" }}
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
              className="d-flex flex-column align-items-center"
              onSubmit={async (event) => {
                event.preventDefault();
                const response = await handleSubmit(
                  email.current.value,
                  password.current.value
                );
                setLoginMessage(response);
              }}
            >
              <label
                className="d-flex flex-column m-2"
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
                className="d-flex flex-column m-2"
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
              <p className="text-danger m-0 p-0">{loginMessage}</p>
              <button
                type="submit"
                className="btn btn-danger mt-2"
                style={{ width: "250px", cursor: "none" }}
              >
                Login
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

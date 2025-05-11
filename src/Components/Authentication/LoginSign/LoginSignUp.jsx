import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTab = (tab) => {
    console.log('clicked!!!!')
    setActiveTab(tab);
  };

  return (
    <>
      <div className="loginSignUpSection">
        <div className="loginSignUpContainer">
          <div className="loginSignUpTabs">
            <p
              onClick={() => handleTab("login")}
              className={activeTab === "login" ? "active" : ""}
            >
              Login
            </p>
            <p
              onClick={() => handleTab("register")}
              className={activeTab === "register" ? "active" : ""}
            >
              Register
            </p>
          </div>
          <div className="loginSignUpTabsContent">
            {/* Login Tab */}

            {activeTab === "login" && (
              <div className="loginSignUpTabsContentLogin">
                <form>
                  <input type="email" placeholder="Email address *" required />
                  <input type="password" placeholder="Password *" required />
                  <div className="loginSignUpForgetPass">
                    <label>
                      <input type="checkbox" className="brandRadio" />
                      <p>Remember me</p>
                    </label>
                    <p>
                      <Link to="/resetPassword">Lost password?</Link>
                    </p>
                  </div>
                  <button>Log In</button>
                </form>
                <div className="loginSignUpTabsContentLoginText">
                  <p>
                    No account yet?{" "}
                    <span onClick={() => handleTab("register")}>
                      Create Account
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Register Tab */}

            {activeTab === "register" && (
              <div className="loginSignUpTabsContentRegister">
                <form>
                  <input type="text" placeholder="Username *" required />
                  <input type="email" placeholder="Email address *" required />
                  <input type="password" placeholder="Password *" required />
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <Link
                      to="/terms"
                      style={{ textDecoration: "none", color: "#c32929" }}
                    >
                      {" "}
                      privacy policy
                    </Link>
                    .
                  </p>
                  <button>Register</button>
                </form>
                <div className="loginSignUpTabsContentLoginText">
                  <p>
                    Have an account?{" "}
                    <span onClick={() => handleTab("login")}>
                      Login
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;

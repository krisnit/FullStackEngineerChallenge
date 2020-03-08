import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const index = () => {
  return (
    <div>
      <nav className="navbar__main">
        <h2 className="navbar__heading">PayPay</h2>
        <ul className="navbar__links">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default index;

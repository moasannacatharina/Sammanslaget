import React from "react";
import { Link } from "@reach/router";
import "./index.css";

const Navigation = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Berättelsen
      </Link>
      <Link className="link" to="/about">
        Skaparna
      </Link>
    </nav>
  );
};

export default Navigation;

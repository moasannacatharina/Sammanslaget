import React from "react";
import { Link } from "@reach/router";
import "./index.css";

const Navigation = () => {
  const NavLink = (props) => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "#ccdbfd" : "#e0e0e0",
            textDecoration: isCurrent ? "underline" : "none",
          },
        };
      }}
    />
  );
  return (
    <nav>
      <NavLink className="link" to="/">
        Berättelsen
      </NavLink>
      <NavLink className="link" to="/about">
        Skaparna
      </NavLink>
    </nav>
  );
};

export default Navigation;

import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
    </nav>
  );
};

export default Navigation;

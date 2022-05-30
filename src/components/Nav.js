import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </nav>
  );
};

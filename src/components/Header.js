import { Link } from "react-router-dom";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/"> LINKshare</Link>
      </h1>
      <Nav />
    </header>
  );
};

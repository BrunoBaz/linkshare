import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import avatarDefault from "../assets/img/avatar-default.svg";
import "./Nav.css";

export const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <nav>
      <div className="menu-links">
        <div>
          <img
            src={`${process.env.REACT_APP_BACKEND}/avatar/${user.imagen}`}
            alt="logo Linkshare"
            className="avatar"
          />
        </div>
        <a className="my-user-name">{user.userName}</a>
        <Link to={`/user/${user.id}`} className="link-menu">
          Ver perfil
        </Link>
        <button onClick={() => logout()} className="boton-logout">
          Cerrar sesión
        </button>
      </div>
    </nav>
  ) : (
    <nav>
      <div className="menu-links">
        <li>
          <Link to="/register" className="link-menu">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="link-menu">
            Login
          </Link>
        </li>
      </div>
    </nav>
  );
};

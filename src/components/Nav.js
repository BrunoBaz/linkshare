import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Nav.css";

export const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <nav>
      <div className="user-menu">
        <div>
          <img
            src={`${process.env.REACT_APP_BACKEND}/avatar/${user.imagen}`}
            alt="logo Linkshare"
            className="avatar"
          />
        </div>
        <p className="nombre-usuario-nav">{user.userName}</p>
        <Link to={`/user/${user.id}`} className="link-menu">
          <p className="ver-perfil-nav">Ver perfil</p>
        </Link>
        <button onClick={() => logout()} className="boton-logout">
          Cerrar sesión
        </button>
      </div>
    </nav>
  ) : (
    <nav>
      <div className="user-menu">
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

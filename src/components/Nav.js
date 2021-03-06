import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Nav.css";

export const Nav = ({ setMostrarNav, mostrarNav }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
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
        <Link
          onClick={() => {
            setMostrarNav(!mostrarNav);
          }}
          to={`/user/${user.id}`}
          className="link-menu"
        >
          <p className="ver-perfil-nav">Ver perfil</p>
        </Link>
        <Link
          onClick={() => {
            setMostrarNav(!mostrarNav);
          }}
          to="/search_user"
        >
          <p className="ver-perfil-nav">Buscar usuario</p>
        </Link>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="boton-logout"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  ) : (
    <nav>
      <div className="user-menu">
        <li>
          <Link
            onClick={() => {
              setMostrarNav(!mostrarNav);
            }}
            to="/register"
            className="link-menu"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMostrarNav(!mostrarNav);
            }}
            to="/login"
            className="link-menu"
          >
            Login
          </Link>
        </li>
      </div>
    </nav>
  );
};

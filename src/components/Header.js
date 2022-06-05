import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Nav } from "./Nav";
import { NewLink } from "../components/NewLink";
import { useLinks } from "../hooks/useLinks";
import logo from "../assets/img/logo.svg";
import addNewLink from "../assets/img/new-link.svg";
import addNewLinkCerrar from "../assets/img/new-link-cerrar.svg";
import goHome from "../assets/img/home.svg";
import avatarDefault from "../assets/img/avatar-default.svg";
import cerrarMenu from "../assets/img/menu-cerrar.svg";
import conectar from "../assets/img/conectar.svg";
import "./Header.css";

export const Header = () => {
  const [mostrarNav, setMostrarNav] = useState(true);
  const [mostrarAddLink, setMostrarAddLink] = useState(true);
  const { user } = useContext(AuthContext);
  const { addLink } = useLinks();

  return user ? (
    <header id="header" className="header">
      <Link to="/">
        <img src={logo} alt="logo Linkshare" className="logo-menu" />
      </Link>

      <div className="menu-header">
        <Link to="/" className="goHome">
          <button className="goHome">
            <img
              src={goHome}
              alt="logo Linkshare"
              className="icono-link-menu"
            />
          </button>
        </Link>

        <div className="menu-añadir-link">
          <div className={mostrarAddLink ? "hide-element" : null}>
            {mostrarAddLink ? (
              <div className="newlink-contain">
                {" "}
                <NewLink addLink={addLink} />
              </div>
            ) : (
              <div className="newlink-contain">
                {" "}
                <NewLink addLink={addLink} />
              </div>
            )}
          </div>
          <button
            onClick={() => setMostrarAddLink(!mostrarAddLink)}
            className="link-header"
          >
            {mostrarAddLink ? (
              <img
                src={addNewLink}
                alt="logo Linkshare"
                className="icono-link-menu"
              />
            ) : (
              <img
                src={addNewLinkCerrar}
                alt="logo Linkshare"
                className="icono-link-menu"
              />
            )}
          </button>
        </div>

        <div className="menu-user">
          <div className={mostrarNav ? "hide-element" : "show-element"}>
            {mostrarNav ? (
              <div className="nav-contain">
                {" "}
                <Nav />
              </div>
            ) : (
              <div className="nav-contain">
                {" "}
                <Nav />
              </div>
            )}
          </div>
          <button
            onClick={() => setMostrarNav(!mostrarNav)}
            className="avatar-header"
          >
            {mostrarNav ? (
              <img
                src={avatarDefault}
                alt="logo Linkshare"
                className="avatar-menu"
              />
            ) : (
              <img
                src={cerrarMenu}
                alt="logo Linkshare"
                className="avatar-menu"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  ) : (
    <header id="header" className="header">
      <Link to="/">
        <img src={logo} alt="logo Linkshare" className="logo-menu" />
      </Link>

      <div className="menu-header">
        <Link to="/" className="goHome">
          <button className="goHome">
            <img
              src={goHome}
              alt="logo Linkshare"
              className="icono-link-menu"
            />
          </button>
        </Link>

        <Link to="/login" className="goHome">
          <button className="goHome">
            <img
              src={addNewLink}
              alt="logo Linkshare"
              className="icono-link-menu"
            />
          </button>
        </Link>

        <div className="menu-user">
          <div className={mostrarNav ? "hide-element" : null}>
            {mostrarNav ? (
              <div className="nav-contain">
                {" "}
                <Nav />
              </div>
            ) : (
              <div className="nav-contain">
                {" "}
                <Nav />
              </div>
            )}
          </div>
          <button
            onClick={() => setMostrarNav(!mostrarNav)}
            className="avatar-header"
          >
            {mostrarNav ? (
              <img
                src={conectar}
                alt="logo Linkshare"
                className="avatar-menu"
              />
            ) : (
              <img
                src={cerrarMenu}
                alt="logo Linkshare"
                className="avatar-menu"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

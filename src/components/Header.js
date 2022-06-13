import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Nav } from "./Nav";
import { NewLink } from "../components/NewLink";
import logo from "../assets/img/logo.svg";
import addNewLink from "../assets/img/new-link.svg";
import addNewLinkCerrar from "../assets/img/new-link-cerrar.svg";
import goHome from "../assets/img/home.svg";
import avatarDefault from "../assets/img/avatar-default.svg";
import cerrarMenu from "../assets/img/menu-cerrar.svg";
import conectar from "../assets/img/conectar.svg";
import "./styles/Header.css";

export const Header = ({ addLink }) => {
  const [mostrarNav, setMostrarNav] = useState(true);
  const [mostrarAddLink, setMostrarAddLink] = useState(true);
  const { user } = useContext(AuthContext);

  return user ? (
    <header id="header" className="header">
      <Link
        to="/"
        onClick={() => {
          setMostrarAddLink(true);
          setMostrarNav(true);
        }}
      >
        <img src={logo} alt="logo Linkshare" className="logo-menu" />
      </Link>

      <div className="menu-header">
        <Link to="/" className="goHome">
          <button
            className="goHome"
            onClick={() => {
              setMostrarAddLink(true);
              setMostrarNav(true);
            }}
          >
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
                <NewLink
                  addLink={addLink}
                  setMostrarAddLink={setMostrarAddLink}
                  mostrarAddLink={mostrarAddLink}
                />
              </div>
            ) : (
              <div className="newlink-contain">
                <NewLink
                  addLink={addLink}
                  setMostrarAddLink={setMostrarAddLink}
                  mostrarAddLink={mostrarAddLink}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setMostrarAddLink(!mostrarAddLink);
              setMostrarNav(true);
            }}
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
                <Nav
                  setMostrarAddLink={setMostrarAddLink}
                  mostrarNav={mostrarNav}
                />
              </div>
            ) : (
              <div className="nav-contain">
                {" "}
                <Nav setMostrarNav={setMostrarNav} mostrarNav={mostrarNav} />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setMostrarAddLink(true);
              setMostrarNav(!mostrarNav);
            }}
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

        <div className="menu-añadir-link">
          <div className={mostrarAddLink ? "hide-element" : null}>
            {mostrarAddLink ? (
              <div className="newlink-contain">
                {" "}
                <NewLink
                  addLink={addLink}
                  setMostrarAddLink={setMostrarAddLink}
                  mostrarAddLink={mostrarAddLink}
                />
              </div>
            ) : (
              <div className="newlink-contain">
                {" "}
                <NewLink
                  addLink={addLink}
                  setMostrarAddLink={setMostrarAddLink}
                  mostrarAddLink={mostrarAddLink}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setMostrarAddLink(!mostrarAddLink);
              setMostrarNav(true);
            }}
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
        <Link to="/login" className="goLogin">
          <button className="avatar-header">
            <img src={conectar} alt="logo Linkshare" className="avatar-menu" />
          </button>
        </Link>
      </div>
    </header>
  );
};

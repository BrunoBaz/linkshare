import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Nav } from "./Nav";
import logo from '../assets/img/logo.svg'
import avatarDefault from '../assets/img/avatar-default.svg'
import cerrarMenu from '../assets/img/menu-cerrar.svg'
import conectar from '../assets/img/conectar.svg'
import "./Header.css";

export const Header = () => {
  const [mostrarNav, setMostrarNav] = useState(true);
  const { user } = useContext(AuthContext);
  return user ? (
    <header id="header" className="header">
      <Link to="/"><img
          src={logo}
          alt="logo Linkshare"
          className="logo-menu"
        />
      </Link>
      <div className="desplegable-menu">

        <div className={mostrarNav ? "show-element" : "hide-element"}>
          {mostrarNav ? <div className="nav-contain"> <Nav /></div> : <div className="nav-contain"> <Nav /></div>}
        </div>
        <button onClick={() => setMostrarNav(!mostrarNav)} className="avatar-header">
          {mostrarNav ? <img
            src={cerrarMenu}
            alt="logo Linkshare"
            className="avatar-menu"
          /> :<img
            src={avatarDefault}
            alt="logo Linkshare"
            className="avatar-menu"
          />}
        </button>
        
      </div>  
    </header>
  ):(
    <header id="header" className="header">
      <Link to="/"><img
          src={logo}
          alt="logo Linkshare"
          className="logo-menu"
        />
      </Link>
      <div className="desplegable-menu">

        <div className={mostrarNav ? "show-element" : "hide-element"}>
          {mostrarNav ? <div className="nav-contain"> <Nav /></div> : <div className="nav-contain"> <Nav /></div>}
        </div>
        <button onClick={() => setMostrarNav(!mostrarNav)} className="avatar-header">
          {mostrarNav ? <img
            src={cerrarMenu}
            alt="logo Linkshare"
            className="avatar-menu"
          /> :<img
            src={conectar}
            alt="logo Linkshare"
            className="avatar-menu"
          />}
        </button>
        
      </div>  
    </header>
  );
};

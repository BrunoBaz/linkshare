import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendLinkService } from "../services/sendLinkService";
import { Link } from "react-router-dom";
import "./NewLink.css";

export const NewLink = ({ addLink, setMostrarAddLink, mostrarAddLink }) => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { user } = useContext(AuthContext);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      const post = await sendLinkService({ data, token });
      addLink(post);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
      setMostrarAddLink(!mostrarAddLink);
    }
  };

  return user ? (
    <form onSubmit={handleForm} className="newlink-menu">
      <fieldset className="formulario-publicar-link">
        <h1 className="nuevo-enlace">Nuevo enlace</h1>
        <label htmlFor="titulo">
          <h2 className="texto-formulario-añadir-link">1-.Añade un título</h2>
          <input
            type="text"
            id="titulo"
            name="titulo"
            required
            placeholder='"Un sitio para compartir enlaces"*'
            maxLength="30"
          />
        </label>

        <label htmlFor="url">
          <h2 className="texto-formulario-añadir-link">
            2-.¿Cúal es enlace que quieres compartir?
          </h2>
          <input
            type="url"
            id="url"
            name="url"
            required
            placeholder='"www.linkshare.com"*'
          />
        </label>

        <label htmlFor="descripcion">
          <h2 className="texto-formulario-añadir-link">
            3-.¿Para que sirve este enlace?
          </h2>
          <textarea
            type="text"
            id="descripcion"
            name="descripcion"
            required
            placeholder='"Es una plataforma para compartir enlaces de interes"*'
            maxLength="280"
          />
        </label>

        <button type="submit" className="boton-enviar">
          Publicar
        </button>
      </fieldset>
      {sending ? <p>Sending post</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  ) : (
    <section className="newlink-menu">
      <h2 className="texto-formulario-añadir-link">
        Debes iniciar sesión para poder compartir un enlace
      </h2>
      <Link to="/login" className="goLogin">
        <button
          className="boton-para-loguearse"
          onClick={() => {
            setMostrarAddLink(!mostrarAddLink);
          }}
        >
          iniciar sesión
        </button>
      </Link>
      <Link to="/register" className="goregister">
        <button
          className="boton-para-loguearse"
          onClick={() => {
            setMostrarAddLink(!mostrarAddLink);
          }}
        >
          registarse
        </button>
      </Link>
    </section>
  );
};

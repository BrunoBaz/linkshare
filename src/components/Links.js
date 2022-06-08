import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services/deleteLinkService";
import { likeService } from "../services/likeService";
import avatarDefault from "../assets/img/avatar-default.svg";
import iconoLike from "../assets/img/icono-like.svg";
import iconoBorrar from "../assets/img/icono-papelera.svg";
import "./Links.css";

export const Links = ({
  link,
  deleteLink,
  refreshLike,
  refreshLikesInUserPage,
}) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const removeLink = async (id) => {
    try {
      await deleteLinkService({ id, token });
      if (deleteLink) {
        deleteLink(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLike = async (id) => {
    setError("");
    try {
      const data = await likeService({ id, token });
      if (refreshLike) {
        refreshLike(data);
        refreshLikesInUserPage(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <article>
      {/* imagen del usuario */}
      <section className="autoria-link">
        <img src={avatarDefault} alt="logo Linkshare" className="avatar-menu" />
        <p>
          {" "}
          <Link to={`/user/${link.user_id}`}> {link.userName}</Link>
        </p>
      </section>
      <Link to={`/link/${link.id}`} className="titulo-link">
        <h2>{link.titulo}</h2>
      </Link>
      <a href={link.url}>{link.url}</a>

      <LinkPreview
        url={link.url}
        width="100%"
        height="40%"
        backgroundColor="#14b5bf"
      />

      <p>{link.descripcion}</p>

      <section className="opciones-link">
        <section className="votos">
          {user && (
            <section>
              <button
                className="boton-opciones"
                onClick={() => {
                  handleLike(link.id);
                }}
              >
                <img
                  src={iconoLike}
                  alt="icono like"
                  className="icono-opciones"
                />
              </button>
              {error && <p>{error}</p>}
            </section>
          )}
          <p className="likes">Likes {link.votes} </p>
        </section>
        <section className="creacion">
          {user && user.id === link.user_id ? (
            <section>
              <button
                className="boton-opciones"
                onClick={() => {
                  if (window.confirm("Are you sure?")) removeLink(link.id);
                }}
              >
                <img
                  src={iconoBorrar}
                  alt="icono borar"
                  className="icono-opciones"
                />
              </button>
            </section>
          ) : null}
          <p className="fecha-publicacion">
            Publicado · {new Date(link.created_at).toLocaleString()}
          </p>
        </section>
      </section>
    </article>
  );
};

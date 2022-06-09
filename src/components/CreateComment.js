import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";
import "./NewLink.css";
import { useGetComments } from "../hooks/useGetComments";
import { createCommentService } from "../services/createCommentService";
import { getCommentService } from "../services/getCommentService";

export const CreateComment = (id) => {
  const { user, token } = useContext(AuthContext);
  const { comments, refreshComments } = useGetComments(id);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      await createCommentService({ id, data, token });
      const refreshedComment = await getCommentService(id);
      refreshComments(refreshedComment);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    user && (
      <section className="comentarios">
        <h1 className="">Comentarios:</h1>
        {comments && (
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id} className="autoria-link">
                  <article>
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/avatar/${comment.imagen}`}
                      alt={`Perfil del usuario ${comment.userName}`}
                      className="avatar-menu"
                    ></img>
                    <p>
                      <Link to={`/user/${comment.user_id}`}>
                        {comment.userName}
                      </Link>
                    </p>
                  </article>
                  <p>{comment.comentario}</p>
                </li>
              );
            })}
          </ul>
        )}
        <form onSubmit={handleForm}>
          <fieldset className="">
            <label htmlFor="comentario">
              <h2>Añade un comentario</h2>
              <input
                type="text"
                id="comentario"
                name="comentario"
                required
                placeholder='"Un sitio para compartir enlaces"'
                maxLength="30"
              />
            </label>

            <button type="submit" className="boton-enviar">
              Publicar
            </button>
          </fieldset>
          {sending ? <p>Sending comment</p> : null}
          {error ? <p>{error}</p> : null}
        </form>
      </section>
    )
  );
};

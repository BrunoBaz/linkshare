import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";
import "./styles/NewLink.css";
import { useGetComments } from "../hooks/useGetComments";
import { createCommentService } from "../services/createCommentService";
import { getCommentService } from "../services/getCommentService";
import "./styles/CreateCommet.css";
import { getAllLinksService } from "../services/getAllLinksService";

export const CreateComment = ({ id, refreshComment }) => {
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
      console.log(refreshedComment);
      refreshComments(refreshedComment);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
      const data = await getAllLinksService();
      console.log({ data });
      refreshComment(data);
    }
  };

  return (
    user && (
      <section className="comentarios">
        <form onSubmit={handleForm}>
          <fieldset className="imput-comment">
            <label htmlFor="comentario">
              <h2>Añade un comentario</h2>
              <input
                type="text"
                id="comentario"
                name="comentario"
                required
                placeholder='"Este enlace me sirvió para encontrar lo que buscaba"'
                maxLength="50"
              />
            </label>

            <button type="submit" className="boton-enviar">
              comentar
            </button>
          </fieldset>
          {sending ? <p>Sending comment</p> : null}
          {error ? <p>{error}</p> : null}
        </form>
        <h1 className="">Comentarios:</h1>
        {comments && (
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id} className="comentario">
                  <article className="body-comentarios">
                    <section className="autoria-comentario">
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
                    </section>
                    <p>{comment.comentario}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    )
  );
};

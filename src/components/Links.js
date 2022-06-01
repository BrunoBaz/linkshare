import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services/deleteLinkService";

export const Links = ({ link, deleteLink }) => {
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
  return (
    <article>
      {/* imagen del usuario */}
      <h2>{link.titulo}</h2>
      {/* <LinkPreview url={link.url} width="20rem" /> */}
      <a href={link.url}>{link.url}</a>
      <p>{link.descripcion}</p>
      <p>Likes {link.votes}</p>
      <p>Created at {new Date(link.created_at).toLocaleString()}</p>
      {user && user.id === link.user_id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) removeLink(link.id);
            }}
          >
            Delete link
          </button>
        </section>
      ) : null}
    </article>
  );
};

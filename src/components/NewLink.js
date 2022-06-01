import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendLinkService } from "../services/sendLinkService";

export const NewLink = ({ addLink }) => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const data = new FormData(e.target);
      const post = await sendLinkService({ data, token });
      e.target.reset();
      addLink(post);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1>New post link</h1>
      <fieldset>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" name="titulo" required />
      </fieldset>
      <fieldset>
        <label htmlFor="url">
          URL
          <input type="url" id="url" name="url" required />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="descripcion">Descripción</label>
        <input type="text" id="descripcion" name="descripcion" required />
      </fieldset>
      <button type="submit">Enviar</button>
      {sending ? <p>Sending post</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};

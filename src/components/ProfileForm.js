import { useState } from "react";
import { modifyUserProfileService } from "../services/modifyUserProfileService";

export const ProfileForm = ({ id, token, modifiedData }) => {
  const [imagen, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData(e.target);

      const result = await modifyUserProfileService({ id, data, token });
      modifiedData(result);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleForm}>
      <fieldset>
        <label htmlFor="biografia">
          Biografia:
          <input type="text" id="biografia" name="biografia" />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="telefono">
          Telefono:
          <input type="text" id="telefono" name="telefono" />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="imagen">Cambiar imagen de perfil</label>
        <input
          type="file"
          name="imagen"
          id="imagen"
          accept={"image/*"}
          onChange={(e) => setImage(e.target.files[0])}
        />
        {imagen ? (
          <figure>
            <img
              src={URL.createObjectURL(imagen)}
              style={{ width: "100px" }}
              alt="Preview"
            />
          </figure>
        ) : null}
      </fieldset>
      <button>Submit</button>
      <fieldset>
        <label htmlFor="password">
          Cambiar contraseña:
          <input type="text" id="password" name="password"></input>
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="userName">
          Cambiar nombre usuario:
          <input type="text" id="userName" name="userName"></input>
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="nombre">
          Cambiar nombre :<input type="text" id="nombre" name="nombre"></input>
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="email">
          Cambiar email :<input type="text" id="email" name="email"></input>
        </label>
      </fieldset>

      {error ? <p>{error}</p> : null}
      {loading ? <p>Cargando datos...</p> : null}
    </form>
  );
};

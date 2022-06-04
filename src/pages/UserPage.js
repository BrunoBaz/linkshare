import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { modifyUserProfileService } from "../services/modifyUserProfileService";

export const UserPage = () => {
  const { user, token } = useContext(AuthContext);
  const { id } = useParams();
  const [imagen, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      /* const biografia = e.target.biografia.value;
      const telefono = e.target.telefono.value;
      const userName = e.target.userName.value;
      const nombre = e.target.nombre.value;
      const email = e.target.email.value;

      const data = { biografia, telefono, imagen, userName, nombre, email };
      console.log("datjnañlkfn", data); */
      const data = new FormData(e.target.form);
      /*    console.log("e.target.form", e.target);
      console.log("Probando formData", data); */
      await modifyUserProfileService({ id, data, token });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    user && (
      <>
        <section>
          <img
            src={`${process.env.REACT_APP_BACKEND}/avatar/${user.imagen}`}
            alt={`Avatar de ${user.userName}`}
          />
          <h2>{user.userName}</h2>
          <article className="biografia">
            <h3>Un poco sobre mi:</h3>
            <p>Blablabla{user.biografia}</p>
          </article>

          <p>{`Mi correo electrónico es: ${user.email}`}</p>
          <p>{`Mi teléfono es ${user.telefono}`}</p>
        </section>
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
              Cambiar nombre :
              <input type="text" id="nombre" name="nombre"></input>
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email">
              Cambiar email :<input type="text" id="email" name="email"></input>
            </label>
          </fieldset>
          <button>Submit</button>
          {error ? <p>{error}</p> : null}
          {loading ? <p>Cargando datos...</p> : null}
        </form>
      </>
    )
  );
};

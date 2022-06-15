import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import notfound from "../assets/img/not-found.svg";

export const NotFoundPage = () => {
  return (
    <section className="body-notfound">
      <h1>¡OUCH!</h1>
      NO ENCONTRAMOS LA PAGINA QUE ESTAS BUSCANDO
      <img src={notfound} alt="imagen de error" className="image-notfound" />
      <Link to="/register" className="goregister">
        <button type="submit" className="boton-para-loguearse">
          volver al inicio
        </button>
      </Link>
    </section>
  );
};

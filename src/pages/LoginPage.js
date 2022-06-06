import { useContext, useState } from "react";
import { logInUserService } from "../services/loginUserService";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./LoginRegisterPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const token = await logInUserService({ email, password });

      login(token);
      console.log(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="body-login">
      <section className="form-login">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleForm} className>
          <fieldset className="input-login">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="input-login">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          {error ? <p>{error}</p> : null}
          <section className="opciones-login">
            <button className="boton-para-loguearse">entar</button>
            <Link to="/register" className="register/login">
              registrarse →
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
};

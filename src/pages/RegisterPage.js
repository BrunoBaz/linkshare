import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services/registerUserService";

export const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    const data = {
      email,
      password,
      userName,
      nombre: name,
    };

    try {
      await registerUserService(data);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="userName">Usuario (Opcional) </label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

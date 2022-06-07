import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileForm } from "../components/ProfileForm";
import { UserLinks } from "../components/UserLinks";
import { AuthContext } from "../context/AuthContext";
import { useUsersData } from "../hooks/useUsersData";
import { followUserService } from "../services/followUserService";

export const UserPage = () => {
  const { id } = useParams();
  const { userData, modifiedData } = useUsersData(id);
  const { user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(false);
  const ide = 1;
  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await followUserService({ id, token });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    userData && (
      <section>
        <img
          src={`${process.env.REACT_APP_BACKEND}/avatar/${userData.imagen}`}
          alt={`Avatar de ${userData.userName}`}
          id="perfil"
        />
        <h2>{userData.userName}</h2>
        {user && userData.id !== user.id && (
          <form onSubmit={handleFollow}>
            <button>Follow</button>
          </form>
        )}
        {userData.biografia && (
          <article className="biografia">
            <h3>Un poco sobre mi:</h3>
            <p>{userData.biografia}</p>
          </article>
        )}

        <p>{`Mi correo electrónico es: ${userData.email}`}</p>
        {userData.telefono && <p>{`Mi teléfono es ${userData.telefono}`}</p>}

        {user && user.id === userData.id && (
          <button onClick={() => setProfile(!profile)}>Editar perfil</button>
        )}

        {profile && (
          <ProfileForm id={user.id} token={token} modifiedData={modifiedData} />
        )}
        <UserLinks id={id} />
        {error && <p>{error}</p>}
        {loading && <p>Cargando...</p>}
      </section>
    )
  );
};

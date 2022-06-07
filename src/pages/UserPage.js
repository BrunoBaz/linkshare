import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileForm } from "../components/ProfileForm";
import { AuthContext } from "../context/AuthContext";
import { useUsersData } from "../hooks/useUsersData";
import { followUserService } from "../services/followUserService";
import { modifyUserProfileService } from "../services/modifyUserProfileService";

export const UserPage = () => {
  const { id } = useParams();
  const { userData, modifiedData } = useUsersData(id);
  const { user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(false);
  const userId = user && user.id;
  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      const data = await followUserService({ id, userId, token });
      console.log(data);
    } catch (error) {
      setError(error.message);
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
      </section>
    )
  );
};

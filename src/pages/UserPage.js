import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileForm } from "../components/ProfileForm";
import { AuthContext } from "../context/AuthContext";
import { useUsersData } from "../hooks/useUsersData";
import { modifyUserProfileService } from "../services/modifyUserProfileService";

export const UserPage = () => {
  const { id } = useParams();
  const { userData, modifiedData } = useUsersData(id);
  const { user, token } = useContext(AuthContext);
  const [profile, setProfile] = useState(false);
  return (
    userData && (
      <section>
        <img
          src={`${process.env.REACT_APP_BACKEND}/avatar/${userData.imagen}`}
          alt={`Avatar de ${userData.userName}`}
          id="perfil"
        />
        <h2>{userData.userName}</h2>
        <article className="biografia">
          <h3>Un poco sobre mi:</h3>
          <p>Blablabla{userData.biografia}</p>
        </article>

        <p>{`Mi correo electrónico es: ${userData.email}`}</p>
        <p>{`Mi teléfono es ${userData.telefono}`}</p>

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

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileForm } from "../components/ProfileForm";
import { UserLinks } from "../components/UserLinks";
import { AuthContext } from "../context/AuthContext";
import { useUsersData } from "../hooks/useUsersData";
import { followUserService } from "../services/followUserService";
import iconoEditar from "../assets/img/icono-editar.svg";
import "./UserPage.css";

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
      <section className="body-userPage">
        <section className="header-userPage">
          <section className="header-info">
            <img
              src={`${process.env.REACT_APP_BACKEND}/avatar/${userData.imagen}`}
              alt={`Avatar de ${userData.userName}`}
              id="perfil"
            />
            <section className="user-info">
              <section className="user-edit">
                <h2 className="user-contact">{userData.userName}</h2>
                {user && user.id === userData.id && (
                  <button
                    className="boton-editar"
                    onClick={() => setProfile(!profile)}
                  >
                    <img
                      src={iconoEditar}
                      alt="icono"
                      className="icono-editar"
                    />
                  </button>
                )}
              </section>
              {user && userData.id !== user.id && (
                <form onSubmit={handleFollow}>
                  <button>Follow</button>
                </form>
              )}
              <p className="user-contact">{`✉ ${userData.email}`}</p>
              {userData.telefono && (
                <p className="user-contact">{`✆ ${userData.telefono}`}</p>
              )}
            </section>
          </section>
          {userData.biografia && (
            <article className="biografia">
              <h3 className="user-contact">Un poco sobre mi:</h3>
              <p className="user-contact">{userData.biografia}</p>
            </article>
          )}

          <section className="edicion-perfil">
            {profile && (
              <ProfileForm
                id={user.id}
                token={token}
                modifiedData={modifiedData}
              />
            )}
          </section>
          <section className="header-contador">
            <section className="contador">
              <h3>000</h3>likes
            </section>
            <div className="line"></div>
            <section className="contador">
              <h3>000</h3>seguidores
            </section>
            <div className="line"></div>
            <section className="contador">
              <h3>000</h3>seguidos
            </section>
          </section>
        </section>
        <UserLinks id={id} className="body-userPage" />
        {error && <p>{error}</p>}
        {/*{loading && <p>Cargando...</p>}*/}
      </section>
    )
  );
};

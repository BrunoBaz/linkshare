import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProfileForm } from "../components/ProfileForm";
import { UserLinks } from "../components/UserLinks";
import { AuthContext } from "../context/AuthContext";
import { useUsersData } from "../hooks/useUsersData";
import iconoFollow from "../assets/img/icono-follow.svg";
import iconoEditar from "../assets/img/icono-editar.svg";
import "./UserPage.css";
import { createFollowUserService } from "../services/createFollowUserService";
import { useFollowSystem } from "../hooks/useFollowSystem";

export const UserPage = () => {
  const { id } = useParams();
  const { userData, allLikes, modifiedData, refreshLikesInUserPage } =
    useUsersData(id);
  const { user, token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const { follow, follower, refreshFollow } = useFollowSystem(id);

  const [error, setError] = useState("");
  const [profile, setProfile] = useState(false);

  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await createFollowUserService({ id, token });
      refreshFollow(data);
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
                {user && userData.id !== user.id && (
                  <form onSubmit={handleFollow}>
                    <button className="boton-follow">
                      <img
                        src={iconoFollow}
                        alt="icono borar"
                        className="icono-follow"
                      />
                    </button>
                  </form>
                )}
              </section>

              {user && userData.id !== user.id && (
                <form onSubmit={handleFollow}>
                  {userData.id != follower.map((foll) => foll.seguido_id) ? (
                    <button>Follow</button>
                  ) : (
                    <button>Unfollow</button>
                  )}
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
              <h3>{allLikes.likes}</h3>
              <p>Likes</p>
            </section>

            <div className="line"></div>

            <section className="contador">
              <h3>{follow.length}</h3>
              <p>Siguiendo</p>
            </section>

            <div className="line"></div>
            <section className="contador">
              <h3>{follower.length}</h3>
              <p>Me siguen</p>
            </section>
          </section>
        </section>
        <UserLinks
          id={id}
          className="body-userPage"
          refreshLikesInUserPage={refreshLikesInUserPage}
        />
        {error && <p>{error}</p>}
        {/*{loading && <p>Cargando...</p>}*/}
      </section>
    )
  );
};

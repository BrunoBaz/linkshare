import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUsersData } from "../hooks/useUsersData";
import "../styles/Follower.css";

export const FollowPage = memo(() => {
  const { follow } = useLocation().state;
  const { allUsers } = useUsersData();

  return (
    <section className="body-listuser">
      <section className="userlist">
        <h2> Usuarios que sigo:</h2>
        <ul className="ul-userlist">
          {follow.length > 0 ? (
            allUsers.map(
              (user) =>
                follow.map((foll) => foll.seguido_id).includes(user.id) && (
                  <Link to={`/user/${user.id}`}>
                    <li className="li-userlist" key={user.id}>
                      <img
                        src={`${process.env.REACT_APP_BACKEND}/avatar/${user.imagen}`}
                        alt="logo Linkshare"
                        className="avatar-menu"
                      />
                      <p>{user.userName}</p>
                    </li>
                  </Link>
                )
            )
          ) : (
            <p>No sigues a nadie</p>
          )}
        </ul>
      </section>
    </section>
  );
});

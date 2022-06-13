import { Link, useLocation } from "react-router-dom";
import { useUsersData } from "../hooks/useUsersData";

export const FollowPage = () => {
  const { follow } = useLocation().state;
  const { allUsers } = useUsersData();

  return (
    <section className="followerPage">
      <ul>
        {follow.length > 0 ? (
          allUsers.map(
            (user) =>
              follow.map((foll) => foll.seguido_id).includes(user.id) && (
                <Link to={`/user/${user.id}`}>
                  <li key={user.id}>
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
  );
};

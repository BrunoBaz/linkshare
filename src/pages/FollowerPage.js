import { Link, useLocation } from "react-router-dom";
import { useUsersData } from "../hooks/useUsersData";

export const FollowerPage = () => {
  const { follower } = useLocation().state;
  const { allUsers } = useUsersData();

  return (
    <section className="followerPage">
      <ul>
        {follower.length > 0 ? (
          allUsers.map(
            (user) =>
              follower.map((foll) => foll.main_user_id).includes(user.id) && (
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
          <p>No te sigue nadie</p>
        )}
      </ul>
    </section>
  );
};

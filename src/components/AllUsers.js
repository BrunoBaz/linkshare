import { Link } from "react-router-dom";

export const AllUsers = ({ users }) => {
  return (
    <section>
      <ul>
        {users.map((user) => (
          <Link to={`/user/${user.id}`}>
            <li key={user.id}>
              <img
                src={`${process.env.REACT_APP_BACKEND}/avatar/${user.imagen}`}
                alt="logo Linkshare"
                className="avatar-menu"
              />{" "}
              <p>{user.userName}</p>{" "}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

import { Link } from "react-router-dom";
import "./styles/AllUsers.css";

export const AllUsers = ({ users }) => {
  return (
    <section className="userlist">
      <ul className="ul-userlist">
        {users.map((user) => (
          <Link to={`/user/${user.id}`}>
            <li className="li-userlist" key={user.id}>
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

import { Link } from "react-router-dom";
import { Links } from "./Links";

export const LinksList = ({ links }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Links link={link} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links</p>
  );
};

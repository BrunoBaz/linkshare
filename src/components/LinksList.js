import { Links } from "./Links";

export const LinksList = ({
  links,
  deleteLink,
  refreshLike,
  userId,
  refreshLikesInUserPage,
  refreshComments,
}) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Links
            link={link}
            deleteLink={deleteLink}
            refreshLike={refreshLike}
            userId={userId}
            refreshLikesInUserPage={refreshLikesInUserPage}
            refreshComments={refreshComments}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links</p>
  );
};

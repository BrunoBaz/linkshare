export const getLinksByUserId = async ({ id, userId }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/link/votes/${id ? id : userId}`
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

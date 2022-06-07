export const getLinksByUserId = async ({ id }) => {
  console.log("IDDASD", id);
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/link/votes/${id}`
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getCountCommentService = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/link/comments`
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  console.log(json.data);
  return json.data;
};

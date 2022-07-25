export const getCommentService = async (id) => {
  console.log(id);
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/link/${id}/comments`
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  console.log(json.data);
  return json.data;
};

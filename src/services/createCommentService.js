export const createCommentService = async ({ id, data, token }) => {
  console.log(id);
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/link/${id}/comments`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

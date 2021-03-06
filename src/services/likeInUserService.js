export const likeInUserService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/link/${id}/votes`,
    {
      method: "POST",
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

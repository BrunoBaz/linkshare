export const followUserService = async ({ userId, id, token }) => {
  console.log("id", id);
  console.log(userId);
  console.log("token", token);

  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${id}/follow`,
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

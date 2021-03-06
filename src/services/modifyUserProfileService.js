export const modifyUserProfileService = async ({ data, id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`, {
    method: "PUT",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

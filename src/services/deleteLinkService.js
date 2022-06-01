export const deleteLinkService = async ({ id, token }) => {
  console.log(id, token);
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/link/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  console.log(json);
  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const deleteLinkService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}link/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

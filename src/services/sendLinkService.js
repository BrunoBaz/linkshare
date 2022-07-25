export const sendLinkService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}link`, {
    method: "POST",
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

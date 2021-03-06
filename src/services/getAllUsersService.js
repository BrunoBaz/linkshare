export const getAllUsersService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

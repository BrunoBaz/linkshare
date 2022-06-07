export const getAllUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  console.log(json.data);
  return json.data;
};

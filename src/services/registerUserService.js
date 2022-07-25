export const registerUserService = async (data) => {
  console.log(process.env.REACT_APP_BACKEND);
  const response = await fetch(`${process.env.REACT_APP_BACKEND}user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
};

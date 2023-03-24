export const isObjectValuesEmpty = (obj) => {
  return Object.values(obj).every((value) => !Boolean(value));
};

export const isSomeObjectValuesEmpty = (obj) => {
  return Object.values(obj).some((value) => !Boolean(value));
};

export const getUserName = () => {
  const user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";

  return user?.fullname?.split(" ")[0];
};

export const getUserToken = () => {
  const token = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : "";

  return token;
};

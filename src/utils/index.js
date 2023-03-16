export const isObjectValuesEmpty = (obj) => {
  return Object.values(obj).every((value) => !Boolean(value));
};

export const getUserName = () => {
  const user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";

  return user.fullname.split(" ")[0];
};

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

  if (user) {
    return user?.fullname?.split(" ")[0];
  }

  return "User";
};

export const getUserToken = () => {
  const token = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : "";

  return token;
};

export const addItemToList = (list, itemToAdd) => {
  const existingItem = list.find((el) => el.uuid === itemToAdd.uuid);

  if (existingItem) {
    return list.map((item) =>
      item.uuid === itemToAdd.uuid ? { ...itemToAdd } : item
    );
  }

  return [...list, { ...itemToAdd }];
};

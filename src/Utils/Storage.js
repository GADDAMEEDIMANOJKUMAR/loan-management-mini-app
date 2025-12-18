export const initUsers = (defaultUsers) => {
  const users = localStorage.getItem("users");
  if (!users) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
};

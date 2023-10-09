import getUsers from "../Users/getUsers";

const usersClient = async () => {
  const data = await getUsers();
};
usersClient();

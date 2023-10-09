import axios from "axios";

export type User = { id: number; email: string; first_name: string };

type GetUsersResponse = { data: User[] };

async function getUsers() {
  try {
    const { data, status } = await axios.get<GetUsersResponse>(
      `https://reqres.in/api/users`,
      {
        headers: { Accept: "application/json" },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    console.log("response status is: ", status);

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("error message: ", err.message);
      return err.message;
    } else {
      console.log("unexpected error: ", err);
      return "An unexpected error occurred";
    }
  }
}

export default getUsers;

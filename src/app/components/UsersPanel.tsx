"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getUsers, { User } from "./Users/getUsers";

const UsersPanel = () => {
  const { data: users, isLoading } = useQuery({
    queryFn: () => {
      getUsers();
      console.log(users);
    },
    queryKey: ["users"],
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <p>Hello from Panel</p>
    </>
    /* <div>
      {users?.map((user: User) => {
        console.log(user.first_name - user.email);
      })}
    </div> */
  );
};

export default UsersPanel;

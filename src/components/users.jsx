import React, { useState } from "react";
import User from "./user";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = ({ users, handleDelete, handleToggleBookMark }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <>
                    <User
                      user={user}
                      handleDelete={handleDelete}
                      handleToggleBookMark={handleToggleBookMark}
                    />
                  </>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default Users;

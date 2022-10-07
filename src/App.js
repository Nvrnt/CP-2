import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (userId) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user._id === userId) {
          user.bookmark = !user.bookmark;
        }
        return user;
      })
    );
  };
  return (
    <div>
      <>
        <SearchStatus users={users} SearchStatus={SearchStatus} />
      </>
      <Users
        users={users}
        handleDelete={handleDelete}
        handleToggleBookMark={handleToggleBookMark}
      />
    </div>
  );
}

export default App;

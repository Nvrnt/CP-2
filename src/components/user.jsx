import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({ user, handleDelete, handleToggleBookMark }) => {
  return (
    <>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => {
          return <Quality quality={quality} key={quality._id} />;
        })}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        {<BookMark user={user} handleToggleBookMark={handleToggleBookMark} />}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(user._id)}
        >
          Удалить
        </button>
      </td>
    </>
  );
};

export default User;

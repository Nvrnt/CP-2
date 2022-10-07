import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({ user, handleDelete, handleToggleBookMark }) => {
  const { name, profession, completedMeetings, rate, _id } = user;
  return (
    <>
      <td>{name}</td>
      <td>
        {user.qualities.map((quality) => {
          return <Quality quality={quality} key={quality._id} />;
        })}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        {<BookMark user={user} handleToggleBookMark={handleToggleBookMark} />}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(_id)}>
          Удалить
        </button>
      </td>
    </>
  );
};

export default User;

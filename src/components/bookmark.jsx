import React from "react";

const BookMark = ({ user, handleToggleBookMark }) => {
  const { bookmark, _id } = user;
  const favourite = bookmark ? "-star-fill" : "";
  return (
    <button onClick={() => handleToggleBookMark(_id)}>
      <i className={"bi bi-bookmark" + favourite}></i>
    </button>
  );
};

export default BookMark;

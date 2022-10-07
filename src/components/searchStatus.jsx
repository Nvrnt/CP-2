import React from "react";

const SearchStatus = ({ users }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "Человек тусанёт";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
    if (lastOne === 1) return "Человек тусанёт";
  };
  return (
    <h2>
      <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
        {users.length > 0
          ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
          : "Никто с тобой не тусанёт"}
      </span>
    </h2>
  );
};

export default SearchStatus;

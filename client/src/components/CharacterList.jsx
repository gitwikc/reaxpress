import * as React from "react";

const CharacterList = ({ characters, title }) => {
  return (
    <div className="CharacterList">
      <div className="title">{title}</div>
      {characters?.length > 0 ? (
        <ul className="characters">
          {characters.map((character) => (
            <li className="character">
              <span className="id">{character.id}</span>
              <span className="name">{character.name}</span>
              <span className="arc">{character.arc}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty_message">Loading list `{title}`</div>
      )}
    </div>
  );
};

export default CharacterList;

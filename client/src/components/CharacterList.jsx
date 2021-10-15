import * as React from "react";

const CharacterList = ({ characters, title }) => {
  return (
    <div className="CharacterList flex-1 p-4 mx-4 my-3 border-2 border-indigo-100 rounded-md">
      <div className="title text-2xl text-indigo-700 font-bold mb-3">
        {title}
      </div>
      {characters?.length > 0 ? (
        <ul className="characters">
          {characters.map((character) => (
            <li
              className="character rounded-md p-1.5 hover:bg-gray-100 transition duration-200"
              key={character.id}
            >
              <span className="id mr-2 text-pink-400 font-extrabold">
                #{character.id}
              </span>
              <span className="name text-lg mr-1">{character.name}</span>
              <span className="arc text-indigo-700">({character.arc})</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty_message text-3xl text-gray-300">
          Loading list `{title}`
        </div>
      )}
    </div>
  );
};

export default CharacterList;

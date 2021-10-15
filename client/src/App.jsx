import * as React from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";

const App = (props) => {
  const [heros, setHeros] = React.useState([]);
  const [villains, setVillains] = React.useState([]);

  React.useEffect(() => {
    const BASE_URL =
      import.meta.env.MODE === "development"
        ? "http://localhost:8000"
        : "https://jojo-characters.herokuapp.com";

    axios({
      url: `${BASE_URL}/heros/all`,
    }).then((res) => setHeros(res.data));

    axios({
      url: `${BASE_URL}/villains/all`,
    }).then((res) => setVillains(res.data));
  }, []);

  return (
    <div className="App text-gray-700">
      <div className="lists flex">
        <CharacterList characters={heros} title="Heros" />
        <CharacterList characters={villains} title="Villains" />
      </div>
    </div>
  );
};

export default App;

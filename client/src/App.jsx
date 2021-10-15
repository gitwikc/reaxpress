import * as React from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";

const App = (props) => {
  const [heros, setHeros] = React.useState([]);

  React.useEffect(() => {
    axios({
      url: "http://localhost:8000/heros/all",
    }).then((res) => setHeros(res.data));
  }, []);

  return (
    <div className="App">
      <CharacterList characters={heros} title="Heros" />
    </div>
  );
};

export default App;

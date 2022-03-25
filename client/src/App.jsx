import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "./redux/actions";
import { Contenedor } from "./Components/Contenedor/Contenedor";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>App Rick y Morty</h1>
      <Contenedor />
    </div>
  );
}

export default App;

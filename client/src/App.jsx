import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/nav/Navbar";
import Favorites from "./components/favorites/favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const onSearch = async (id) => {
    try {
      //evitar duplicados
      const characterId = characters.filter((character) => character.id === id);
      if (characterId.length) return alert("El personaje ya existe!!");
      if (id < 1 || id > 826)
        return alert("No hay ningun personaje con esa ID");
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = "example@gmail.com";
  // const PASSWORD = "password12";

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { access } = (
        await axios(URL + `?email=${email}&password=${password}`)
      ).data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  return (
    <div>
      {pathname !== "/" ? <Navbar onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route exact path="/" element={<Form login={login}/>} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

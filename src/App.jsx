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
  const {pathname} = useLocation();

  const onSearch = (id) => {
    //evitar duplicados
    const characterId = characters.filter(character => character.id === Number(id));
    if(characterId.length) return alert("El personaje ya existe!!");
    if(id < 1 || id > 826) return alert("No hay ningun personaje con esa ID")
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const EMAIL = "example@gmail.com";
  const PASSWORD = "password12";
  
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

 useEffect(() => {
  !access && navigate('/');
}, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };


  return (
    <div>
      {
        pathname !== '/'
        ? <Navbar onSearch={onSearch} />
        : null
      }
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/detail/:id" element={<Detail/>}/>
        {/* <Route exact path="/" element={<Form login={login}/>} /> */}
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

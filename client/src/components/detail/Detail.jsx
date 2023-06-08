import styles from './Detail.module.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
    const { id } = useParams();
    const [ character , setCharacter ] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return (
        <div className={styles.container}>
            <div className={styles.container_hijo}>
            <h1>{character.name && character.name}</h1>
            <img src={character.image && character.image} alt="" />
            <br />
            <div className={styles.descripcion}>
            <h2>Status: <span>{character.status && character.status}</span></h2>
            <h2>Species: <span>{character.species && character.species}</span></h2>
            <h2>Gender: <span>{character.gender && character.gender}</span></h2>
            <h2>Origin: <span>{character.origin?.name && character.origin?.name}</span></h2>
            <h2>Location: <span>{character.location?.name && character.location?.name}</span></h2>
            <Link to="/home">
                <button><b>↺</b> Volver</button>
            </Link>
            </div>
            </div>
        </div>
    )
}

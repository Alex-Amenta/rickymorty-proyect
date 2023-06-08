import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import styles from './Favorites.module.css'

 function Favorites(props) {

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    aux ? setAux(false) : setAux(true); //Forzado de render 
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <div>
      <div className={styles.selectContainer}>
        <select name="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter} >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    
    <div className={styles.cardsContainer}>
      {props.myFavorites.map((character) => (
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={props.onClose}
        />
      ))}
    </div>
    </div>
  );
}


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
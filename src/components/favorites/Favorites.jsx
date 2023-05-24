import { connect } from "react-redux";
import Card from "../card/Card";

 function Favorites(props) {
  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };

  return (
    <div style={cardsContainer}>
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
  );
}


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);
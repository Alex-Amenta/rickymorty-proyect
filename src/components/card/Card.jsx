import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.favContainer}>

        {isFav ? (
          <button className={styles.corazon} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.corazon} onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.borrar} onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <h4 style={{ color: "green" }}>
          <b>ID: {props.id}</b>
        </h4>
        <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
          <h2>{props.name}</h2>
        </Link>
        <h4>{props.status}</h4>
        <h4>{props.species}</h4>
      </div>
      <img src={props.image} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

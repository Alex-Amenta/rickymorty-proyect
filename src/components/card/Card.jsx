import styles from "./Card.module.css";

export default function Card(props) {
  // console.log(props);
  return (
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <button onClick={props.OnClose}>X</button>
        </div>
        <div className={styles.dataContainer}>
          <h2>{props.name}</h2>
          <h4>{props.status}</h4>
          <h4>{props.species}</h4>
          <h4>{props.gender}</h4>
          {/* aca es origin.name */}
          <h4>{props.name.origin}</h4> 
        </div>
        <img src={props.image} alt="" />
      </div>
  );
}

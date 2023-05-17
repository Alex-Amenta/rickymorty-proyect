import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   // console.log(props);
   return (
      <div>
         <input className={styles.input} type='search' placeholder="Search character..."/>
         <button className={styles.button} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

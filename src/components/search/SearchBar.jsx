import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   // console.log(props);
   const [id, setId] = useState("");

   const handleChange = event => {
      const { value } = event.target;
      setId(value);
   }

   return (
      <div>
         <input 
         className={styles.input} 
         type='search' 
         placeholder="Search character..." 
         name="search"
         id="search" 
         onChange={handleChange}/>
         <button className={styles.button} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}

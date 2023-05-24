import React from "react";
import SearchBar from "../search/SearchBar";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <div className={styles.container}>
        <h1>Rick and Morty</h1>
        <NavLink to="/home">
          <button className={styles.button}>Home</button>
        </NavLink>
        <NavLink to="/about">
          <button className={styles.button}>About</button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={styles.button}>Favorites</button>
        </NavLink>
        <NavLink to="/">
          <button className={styles.logout} onClick={() => setAcess(false)}>Log Out</button>
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

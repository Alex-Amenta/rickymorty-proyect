import { useState } from "react";
import styles from "./Form.module.css";
import Validacion from "./Validacion";

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErorrs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErorrs(
      Validacion({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_hijo}>
        <form >
          <img
            src="https://pbs.twimg.com/media/C7DbfdPXAAI6emx?format=jpg&name=900x900"
            alt=""
          />
          {/* <h1>Login</h1> */}
          <div className={styles.input_container}>
            <label>Email: </label> <hr />
            <input
              type="text"
              placeholder="email"
              required
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <p>{errors.email ? errors.email : null}</p>
          </div>
          <div className={styles.input_container}>
            <label>Password: </label> <hr />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <p>{errors.password ? errors.password : null}</p>
          </div>
          <button onClick={handleSubmit} type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

/*
1-Cargar lo que el usuario ingresa en "userData" {email, password}
2-Valido lo que hay en userData + lo que esta ingresando {}

*/

import React from "react";
import styles from "./About.module.css";

export default function About(props) {
  return (
    <div>
      <div className={styles.container_padre}>
        <div className={styles.container_hijo}>
          <h1>Acerca de mi</h1>
          <h2>Alexander Amenta</h2>
          <img
            className={styles.img_alex}
            src="https://media.licdn.com/dms/image/D5603AQFIfpbQp-3v5Q/profile-displayphoto-shrink_400_400/0/1683204572859?e=1689811200&v=beta&t=_BpGwCMy_nodrF9ztF5TAQsPMXCHY_sdon7fTff0g80"
            alt=""
          />
          <p>
            ¡Hola, soy Alexander! Soy un estudiante de desarrollo Full-Stack con
            la misión de crear soluciones digitales innovadoras. Con{" "}
            <b>Henry</b>, creamos un proyecto de Rick and Morty con React-Vite
            desde cero. ¡Únase a nosotros en nuestro viaje, conéctese conmigo
            así crecemos esta <b>hermosa comunidad!</b>
          </p>{" "}
          <br />
          <a
            className={styles.a_link}
            href="https://www.linkedin.com/in/alexander-amenta/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

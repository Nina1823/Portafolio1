import React from "react";
import styles from "../About/About.module.css";
import AboutImg from "../../Images/About/About.jpg";

export const About = () => {
    return (
    <div className={styles.container}>
        <div className={styles.containerImage}>
            <img src={AboutImg} alt="AboutImage" />
        </div>

        <div className={styles.textAboutMe}>
            <h2>Hi! I'm Liliana</h2>
            <h3>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
                las industrias desde el año 1500, cuando un impresor (N. del T.
                persona que se dedica a la imprenta) desconocido usó una galería de
                textos y los mezcló de tal Para mover el contenido del contenedor un 
                poco más a la izquierda, puedes aplicar un margen a la derecha al contenedor.
                Aquí tienes actualizado con un margen a la derecha:
            </h3>
        </div>
    </div>
);
};

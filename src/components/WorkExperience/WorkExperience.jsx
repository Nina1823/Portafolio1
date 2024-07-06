import React from "react";
import styles from "./WorkExperience.module.css"

export const WorkExperience =()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Experiencia laboral</h1>
            <div className={styles.cards}>
                <div className={styles.cardOne}>
                    <h3>Auditoria y prueba</h3>
                    <h4>NetW Consulting SAS</h4>
                    <h4>2023-2024</h4>
                </div>  
                <br/>
                <div className={styles.cardTwo}>
                    <h3 className={styles.titleCard}>Diseñadora y desarrolladora web</h3>
                    <h4>Cardados y Fibras SAS</h4>
                    <h4>2024</h4>
                </div>
            </div>
        </div>
    )
}
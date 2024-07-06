import React from "react";
import styles from "../WorkExperience/WorkExperience.module.css"

export const WorkExperience =()=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Experiencia laboral</h1>
            <div>
                <div className={styles.backContainer}>
                    <div className={styles.card}>
                        <h3>Auditoria y prueba</h3>
                        <h4>NetW Consulting SAS</h4>
                    </div>
                </div>    
                    <br/>
                <div className={styles.backContainer}>
                    <div className={styles.card}>
                        <h3 className={styles.titleCard}>Diseñadora y desarrolladora web</h3>
                        <h4>Cardados y Fibras SAS</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
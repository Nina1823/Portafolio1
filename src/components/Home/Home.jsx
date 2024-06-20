import React from "react";
import styles from "./Home.module.css"
import profileImage from "../../Images/Profile.jpg";

export const Home = () => {
    return(
        <div className={styles.containerpp}>
            <div className={styles.containerSmall}>
                <div className={styles.containerCircle}>
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className={styles.containerTitle}> 
                    <h1 className={styles.name}>LILIANA ARIAS RIVERA</h1>
                    <span className={styles.subTitle}>Diseño y desarrollo web</span>
                </div>
            </div>
        </div>
    )
};
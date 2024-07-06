import React from "react";
import styles from "./AcademicTraining.module.css"
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";

export const AcademicTraining = () =>{
    const school = [
        {
            icon:<FaSchoolCircleCheck />,
            name: "Bachiller Técnico en Sistemas"
        },
        {
            icon:<IoSchoolSharp />,
            name:"Full Stack Web Developer"
        },
        {
            icon: <LiaUniversitySolid />,
            name: "Técnología en desarrollo de software"
        },
        {
            icon: <FaUniversity />,
            name: "Ingeniería de sistemas"
        }
    ];

    return (
        <div>
            <h1 className={styles.title}>FORMACIÓN ACADEMICA</h1>
            <div className={styles.containerAcademmicTraining}>
                {school.map((element, index) =>(
                    <div key={index} className={styles.card}>
                        <span className={styles.icon}>{element.icon}</span>
                        <h3 className={styles.name}>{element.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
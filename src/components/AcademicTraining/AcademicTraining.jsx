import React from "react";
import styles from "./AcademicTraining.module.css"
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

export const AcademicTraining = () =>{

    const school = [
        {
            icon:<FaSchoolCircleCheck />,
            name: "Bachiller Técnico en Sistemas",
            fecha: "Finalizado "
        },
        {
            icon:<IoSchoolSharp />,
            name:"Full Stack Web Developer",
            fecha: "Finalizado"
        },
        {
            icon: <LiaUniversitySolid />,
            name: "Técnología en desarrollo de software",
            fecha: "Proceso de graduación"
        },
        {
            icon: <FaUniversity />,
            name: "Ingeniería de sistemas",
            fecha: "En proceso"
        }
    ];
    const cursos=[
        {
            icon:<SiPowerbi />,
            name: "PowerBI",
            fecha: "Finalizado"
        },
        {
            icon:<RiEnglishInput />,
            name:"Nivel 1 y 2",
            fecha: "Finalizado"
        },
        {
            icon:<FaAngular />,
            name: "Angular",
            fecha: "MAMEE YA PUES!"
        },
        {
            icon:<FaLaptopCode />,
            name: "SAP",
            fecha: "MAMEE YA PUES!"
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
                        <span className={styles.fecha}>
                            {element.fecha === "Finalizado" ? (
                                <>
                                    {element.fecha} <CiCircleCheck className={styles.check}/>
                                </>
                            ) : (
                                element.fecha
                            )}
                        </span>
                    </div>
                ))}
            </div>
            <h1 className={styles.title}>CURSOS</h1>
            <div className={styles.containerCursos}>
                {cursos.map((element,index)=>(
                    <div key={index} className={styles.cardCurso}>
                        <span className={styles.icon}>{element.icon}</span>
                        <span className={styles.name}>{element.name}</span>
                        <span className={styles.fecha}>
                            {element.fecha === "Finalizado" ? ( // Verificación condicional para agregar el ícono
                                <>
                                    {element.fecha} <CiCircleCheck className={styles.check}/>
                                </>
                            ) : (
                                element.fecha
                            )}
                        </span>
                    </div>
                ))}

            </div>
        </div>
    )
}
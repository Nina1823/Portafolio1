import React from "react";
import styles from "./Projects.module.css";
import HoteleriaAppImage from "../../Images/Projects/Hoteleria.png";
import VideoGamesAppImage from "../../Images/Projects/VideoGames.png";
import ClonSpotifyImage from "../../Images/Projects/ClonSpotify.png";
import TravelImage from "../../Images/Projects/Travel.png";
import RestaurantAppImage from "../../Images/Projects/Restaurant.png";
import Powerbi from "../../Images/Projects/Powerbi.png";

export const Projects = () => {
    const projects = [
        {
            name: "Hoteleria App",
            image: HoteleriaAppImage
        },
        {
            name: "VideoGames App",
            image: VideoGamesAppImage
        },
        {
            name: "Clon Spotify",
            image: ClonSpotifyImage
        },
        {
            name: "Travel",
            image: TravelImage
        },
        {
            name: "Restaurante App",
            image: RestaurantAppImage
        },
        {
            name: "Ventas con PowerBI",
            image: Powerbi
        }
    ];

    return (
        <div>
            <h1 className={styles.title}>PROYECTOS</h1>
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <div className={styles.imageContainer}>
                            <img src={project.image} alt={project.name} className={styles.projectImage} />
                            <div className={styles.overlay}>
                                <h2 className={styles.projectName}>{project.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

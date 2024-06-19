import style from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <div className={style.container}>
            
                <ul className={style.NavItems}>
                <li className={`${style.items} ${style.small}`}>Home</li>
                <li className={`${style.items} ${style.small}`}>About</li>
                    <li className={style.items}>Experiencia</li>
                    <li className={style.items}>Formación</li>
                    <li className={style.items}>Habilidades</li>
                    <li className={style.items}>Proyectos</li>
                    <li className={style.items}>Lenguajes</li>
                    <li className={style.items}>Contáctame</li>
                </ul>
        </div>
    );
};

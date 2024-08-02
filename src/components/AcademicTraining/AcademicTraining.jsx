import React from "react";
import Style from "./AcademicTraining.module.css";
import { PiGraduationCapThin } from "react-icons/pi";

export const AcademicTraining = () => {
    return (
        <div className={Style.container}>
            <section className={Style.curriculum}>
                <div className={Style.contenidoSeccion}>
                    <h2>Formación Académica</h2>
                    <div className={Style.timeline}>
                        {/* Cada ítem de formación */}
                        <div className={Style.item}>
                            <div className={Style.conectord}>
                                <PiGraduationCapThin className={Style.grado} />
                                <div className={Style.linead}></div>
                            </div>
                            <div className={Style.content}>
                                <h4 className={Style.escuela}>Ingeniería en Sistemas</h4>
                                <span className={Style.casa}>Instituto tecnológico Metropolitano</span>
                                <span className={Style.fecha}>2020 - Actualidad</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                            </div>
                        </div>
                        <div className={Style.item}>
                            <div className={Style.conectord}>
                                <PiGraduationCapThin className={Style.grado} />
                                <div className={Style.linead}></div>
                            </div>
                            <div className={Style.content}>
                                <h4 className={Style.escuela}>Tecnología en desarrollo de software</h4>
                                <span className={Style.casa}>Instituto tecnológico Metropolitano</span>
                                <span className={Style.fecha}>En proceso de grados</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                            </div>
                        </div>
                        <div className={Style.item}>
                        <div className={Style.conectord}>
                                <PiGraduationCapThin className={Style.grado} />
                                <div className={Style.linead}></div>
                            </div>
                            <div className={Style.content}>
                                <h4 className={Style.escuela}>Full Stack web developer</h4>
                                <span className={Style.casa}>Henry</span>
                                <span className={Style.fecha}>2022 - 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                            </div>
                        </div>
                        <div className={Style.item}>
                        <div className={Style.conectord}>
                                <PiGraduationCapThin className={Style.grado} />
                                <div className={Style.linead}></div>
                            </div>
                            <div className={Style.content}>
                                <h4 className={Style.escuela}>Bachiller Técnico en Sistemas</h4>
                                <span className={Style.casa}>Institución Educativa Gonzalo Restrepo Jaramillo</span>
                                <span className={Style.fecha}>2018 - 2019</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={Style.button}>Conocer más</button>
            </section>
        </div>
    );
};

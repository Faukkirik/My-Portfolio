import React from 'react';
import s from './Project.module.css'

export const Project = () => {
    return (
        <div className={s.project}>
            <div className={s.icon} >
                <button className={s.button}>Смотреть</button>
            </div>
            <div className={s.text}>
                <h5 className={s.title}>TODOLIST</h5>
                <span className={s.description}>afdf sdf we fsd fsd wefweds sdfwe we wsdfsdf f scvcxwe rwer</span>
            </div>
        </div>
    );
};

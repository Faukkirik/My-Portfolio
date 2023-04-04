import React from 'react';
import s from './Skill.module.css'

export const Skill = (props: any) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h5>{props.name}</h5>
            <span className={s.description}>
                {props.text}
            </span>
        </div>
    );
};
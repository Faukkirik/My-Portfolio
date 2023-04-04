import React from 'react';
import s from './Work.module.css'
import c from '../common/styles/Container.module.css'
export const Work = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${c.container} ${s.containerWork}`}>
            <h3 className={s.title}>Рассматриваю варианты удаленной работы</h3>
            <button className={s.button}>Нанять меня</button>
            </div>
        </div>
    );
};
import React from 'react';
import s from './Main.module.css'
import c from '../common/styles/Container.module.css'
export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Jeffrey Aaron</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};


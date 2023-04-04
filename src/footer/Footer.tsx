import React from 'react';
import s from './Footer.module.css'
import c from  '../common/styles/Container.module.css'
import {Block} from "./block/Block";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${c.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Кондратьев Константин</h3>
                <div className={s.blockContainer}>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
                <span className={s.span}>©️<b> 2023 Все права защищены</b></span>
            </div>
        </div>
    );
};
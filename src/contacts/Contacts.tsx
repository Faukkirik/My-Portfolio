import React from 'react';
import s from './Contacts.module.css'
import c from '../common/styles/Container.module.css'
export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <form action="" className={`${c.container} ${s.contactsContainer}`}>
                <h3 className={s.title}>Контакты</h3>
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                <textarea name="" id="" cols={20} rows={10} className={s.textarea}>
                </textarea>
                <button className={s.button}>Отправить</button>
            </form>

        </div>
    );
};
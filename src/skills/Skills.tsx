import React from 'react';
import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill name={"JS"} text={"fasfsdfsder fsd fsd ewrfsgds gs fgd gdf 1342 45 stdf gert e er e"}/>
                    <Skill name={"CSS"} text={" sfdger  ergdf c dbfbe cs v we  dfg t34th dfgd we"}/>
                    <Skill name={"HTML"} text={" fd ge bdb d gadfgdfg  erte rbd dvb34435 3er ge3g"}/>
                </div>
            </div>
        </div>
    );
};

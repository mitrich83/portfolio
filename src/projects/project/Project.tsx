import React from 'react';
import s from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
    icon: string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )

}
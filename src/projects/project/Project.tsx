import React from 'react';
import s from './Project.module.css';

type ProjectPropsType = {
    title: string
    description: string
    icon: string
    gitHub: string
    gitHubPages: string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <div className={s.showProject}>
            <a href={props.gitHub}>
                <img
                    style={{width: 30}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2ZDTrkVnPmJxKbml0CHQGrt0MtWNfJJuT-SD29F0WoTqZrHF7AbbtOMn9jj4bFwbDJs&usqp=CAU" alt="github"/>
            </a>
            <a href={props.gitHubPages}>
                <img
                    style={{width: 30}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wuhoyUNYBGN-6cGSozr3Mm8z4-Cvioenb1xtUpNm7HyaBIxAilE8l0AAkf6nyb-8o5c&usqp=CAU" alt="github"/>
            </a>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    )

}
import React from 'react';
import s from './Navigation.module.css';

export const Navigation = ()=> {
    return (
        <div className={s.navigation}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    )

}
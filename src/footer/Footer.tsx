import React from 'react';
import s from './Footer..module.css';
import {Navigation} from '../Navigation/Navigation';

export const Footer = ()=> {
    return (
        <div className={s.footer}>
            <h3>Dmitry Malykhin</h3>
            <Navigation/>
        </div>
    )

}
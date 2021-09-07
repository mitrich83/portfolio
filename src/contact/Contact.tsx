import React from 'react';
import s from './Contact.module.css';
import styleContainer from './../common/styles/Style.module.css'

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={` ${styleContainer.container} 
                              ${s.contact}`}>
                <h3> Contact with me </h3>
                <form className={s.form}>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        email:
                        <input type="text" name="name"/>
                    </label>
                    <label className={s.description}>
                        Discription:
                        <textarea/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}
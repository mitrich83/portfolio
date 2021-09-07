import React from 'react';
import s from './Skills.module.css';
import styleContainer from './../common/styles/Style.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={` ${styleContainer.container} 
                              ${s.skillsContainer}`}>
                <h2 className={s.titleSkill}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML & CSS'}
                           description={'Free course from HTML Academy. ' +
                           'Book: Head First HTML and CSS. ' +
                           'Course site layout from IT-Incubator'}
                           icon={'http://site4business.net/wp-content/uploads/2016/02/html-and-css.jpg'}
                    />
                    <Skill title={'React & Redux'}
                           description={'Course from IT-Incubator'}
                           icon={'https://res.cloudinary.com/practicaldev/image/fetch/s--vsX0Gedu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ewwl9i4kpr70lgpbolw4.jpg'}
                    />
                    <Skill title={'TDD'}
                           description={'Course from IT-Incubator'}
                           icon={'https://www.simongilbert.net/content/images/2020/08/Screenshot-2020-08-13-at-13.21.13.png'}

                    />
                    <Skill title={'Typescript'}
                           description={'Course from IT-IncubatorCourse from IT-Incubator'}
                           icon={'https://styles.redditmedia.com/t5_2v6gg/styles/communityIcon_4w7vh6c21f871.png'}
                    />

                </div>
            </div>
        </div>
    )

}
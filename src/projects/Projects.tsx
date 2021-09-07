import React from 'react';
import s from './Projects.module.css';
import styleContainer from './../common/styles/Style.module.css'
import {Project} from './project/Project';


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={` ${styleContainer.container} 
                              ${s.projectsContainer}`}>
                <h2 className={s.titleProject}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'Social Network'}
                             description={'Social media originated as a way to interact with friends and family'}
                             icon={'https://previews.123rf.com/images/rawpixel/rawpixel1504/rawpixel150405509/38967820-social-network-social-media-business-people-technology-concept.jpg'}
                             gitHub={'https://github.com/mitrich83/Social_Network'}
                             gitHubPages={''}
                    />
                    <Project title={'Todolist'}
                             description={'Summary: Simple and straightforward, Ta-da List is like your basic paper to-do list, only electronic!'
                            }
                             icon={'https://store-images.s-microsoft.com/image/apps.31700.13510798885086337.ecb4d76e-fc1d-4fde-be50-82b1ec4c01a5.188114c7-6eb6-4266-a720-6c32607f6078?mode=scale&q=90&h=1080&w=1920'}
                             gitHub={'https://github.com/mitrich83/Todolist'}
                             gitHubPages={''}

                    />
                </div>
            </div>
        </div>
    )

}
import React from 'react';
import s from './Main.module.css';
import styleContainer from './../common/styles/Style.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.mainTitle}>
                    <h1>I'm
                        <span> Dmitry </span>
                        Malykhin
                    </h1>
                    <p>
                        Front-end Developer (React/TypeScript)
                    </p>

                </div>
                <div className={s.mainPhoto}>
                    <img
                        src="https://lh3.googleusercontent.com/fwCf8nymIqpkCqfxda5ragxiP77isBdO1AFWvdz6o73nFLwxBiOOfg3t9miqHQgwdY8lDyZrV-LMAba5dQOtFzsXXQew0oE2N5QfJGoQ7fZKxRAacicswXtoqLS9FSwtZTf1jX-w1EpZSNOFRmb-qWFa8PQiE5SWPHCyuRHQorMNlrLujeOb8ubkjQkHT862YVtVwi7zFuJJMBB2uVIuGdMnLo-IGUxnoh6_-ps-F0-BgwxJ3QyHr-uK4tRu4kErZYsj30Kf3InIhgfb7AaUGpbr4pBN31RTq0ffXOTLd8Xik2zHb3F3c4E6OqV0Z3X3LXrAfAEM_buCxMrhCvYFJm3_mzd9Bs9wWu5UV_kZ-Jbuaey2eLNwLZNcOIQT_oMhiKMdJRplxpQZqR6W8wPUyO2cNZpr9I6p1kO9mmTazwP7py8u6zGmCwIbRu1OuZqNvuYdLQIuSRmQpof9Ke_cF5IyJwMPlCUIaYw886NJwRrboUCluh8OQMtREkuOF7OMbiblKTfSVsGpjkgttyb-azU1jacqyUmzph4UarxH542dSxtjLIln8k8DHm6vbF3sHr67V3GY7a9DvfmRPXD6FC_FxRi3rGK1SqBn54y1ceWXNe-MFY2eXbqrq6BhDle1B482SIwPDOO60zwz6wIHHp7IP0Uovuf-TwOEV6BnL8IVmNLDHQfTQYCnMZ7W2-JpLEXzrLVwHo6GxNnaXdMWMe-u=w489-h480-no?authuser=0"
                        alt="myPhoto"/>
                    <div className={s.social}>
                        <a href={''}>
                            <img className={s.linkedIn}
                                 style={{width: 50}}
                                src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                                alt="LinkedIn"/>
                        </a>

                        <a href={'https://github.com/mitrich83/portfolio'}>
                            <img
                                style={{width: 50}}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2ZDTrkVnPmJxKbml0CHQGrt0MtWNfJJuT-SD29F0WoTqZrHF7AbbtOMn9jj4bFwbDJs&usqp=CAU" alt="github"/>
                        </a>
                        <a href={'https://github.com/mitrich83?tab=repositories'}>
                            <img
                                style={{width: 50}}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wuhoyUNYBGN-6cGSozr3Mm8z4-Cvioenb1xtUpNm7HyaBIxAilE8l0AAkf6nyb-8o5c&usqp=CAU" alt="github"/>
                        </a>
                    </div>



                </div>
            </div>
        </div>
    )

}
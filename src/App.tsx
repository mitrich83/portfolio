import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Footer} from './footer/Footer';
import {Contact} from './contact/Contact';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;

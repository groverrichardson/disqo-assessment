import React from 'react';
import 'tailwindcss/tailwind.css';
import ButtonOptions from './components/button-options';
import NotepadHero from './components/notepad-hero';
import './styles/tailwind.sass';

function App() {
    return (
        <main className="App flex flex-col justify-center items-center">
            <div className="app-container flex flex-row flex-wrap justify-start items-start">
                <NotepadHero />
                <ButtonOptions />
            </div>
        </main>
    );
}

export default App;

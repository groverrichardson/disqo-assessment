import React from 'react';
import 'tailwindcss/tailwind.css';
import NotepadHero from './components/notepad-hero';

function App() {
    return (
        <main className="App flex flex-col justify-center items-center">
            <div className="app-container flex flex-col justify-center items-center">
                <NotepadHero />
            </div>
        </main>
    );
}

export default App;

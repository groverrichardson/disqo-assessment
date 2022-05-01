import React from 'react';
import 'tailwindcss/tailwind.css';
import NotepadHero from './components/notepad-hero';
import './styles/tailwind.sass';

function App() {
    return (
        <main className="App flex flex-col justify-center items-center">
            <div className="app-container flex flex-row flex-wrap justify-start items-start">
                <NotepadHero />
                <div className="button-group flex flex-row justify-between items-center w-72 max-w-full">
                    <button className="view-stat border-2 border-gray-300 py-2 px-4 rounded-md">
                        View Stats
                    </button>
                    <button className="save border-2 border-gray-300 py-2 px-4 rounded-md">
                        Save
                    </button>
                    <button className="Delete border-2 border-gray-300 py-2 px-4 rounded-md">
                        Delete
                    </button>
                </div>
            </div>
        </main>
    );
}

export default App;

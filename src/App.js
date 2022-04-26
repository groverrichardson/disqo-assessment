import React from 'react';
import 'tailwindcss/tailwind.css';
import NotepadHero from './components/notepad-hero';
import './styles/tailwind.sass';

function App() {
    return (
        <main className="App flex flex-col justify-center items-center">
            <div className="app-container flex flex-row flex-wrap justify-start items-start">
                <NotepadHero />
                <form className="notes-container flex flex-col justify-center items-start">
                    <h2 className="my-notes ">My Notes</h2>
                    <input
                        type="text"
                        className="note-title border-2 border-gray-300 p-2 rounded-md mt-2"
                        placeholder="Enter note title..."
                    />
                    <textarea
                        name="note-input"
                        id="note-input"
                        cols="30"
                        rows="10"
                        className="border-2 border-gray-300 p-2 rounded-md mt-2"
                        placeholder="Enter note..."></textarea>
                    <button className="note-submit bg-green-500 py-2 px-4 mt-2 text-white">
                        Add
                    </button>
                </form>
            </div>
        </main>
    );
}

export default App;

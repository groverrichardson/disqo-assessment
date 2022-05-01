import React from 'react';

function NotepadHero() {
    return (
        <div className="NotepadHero flex flex-col justify-center items-between w-1/2">
            <div className="title-container">
                <h1 className="notepad-title">Notepad Title</h1>
                <input
                    type="text"
                    className="notepad-title-input border-2 border-gray-300 p-2 rounded-md mt-2"
                    placeholder="My notepad title..."
                />
            </div>
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
    );
}

export default NotepadHero;

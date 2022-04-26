import React from 'react';

function NotepadHero() {
    return (
        <div className="NotepadHero flex flex-row justify-between items-center w-full">
            <div className="title-container">
                <h1 className="notepad-title">Notepad Title</h1>
                <input
                    type="text"
                    className="notepad-title-input border-2 border-gray-300 p-2 rounded-md mt-2"
                    placeholder="My notepad title..."
                />
            </div>
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
    );
}

export default NotepadHero;

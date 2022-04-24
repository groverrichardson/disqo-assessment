import React from 'react';

function NotepadHero() {
    return (
        <div className="NotepadHero">
            <div className="title-container">
                <h1 className="notepad-title">Notepad Title</h1>
                <input
                    type="text"
                    className="notepad-title-input border-2 border-gray-300 p-2 rounded-md mt-2 w-96"
                    placeholder="My notepad title..."
                />
            </div>
        </div>
    );
}

export default NotepadHero;

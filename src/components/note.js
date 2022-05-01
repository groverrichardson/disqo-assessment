import React from 'react';

function Note() {
    return (
        <div className="Note flex flex-row justify-between items-start ">
            <div className="note-details-container">
                <input
                    type="text"
                    className="note-title border-2 border-gray-300 p-2 rounded-md mt-2"
                    placeholder="Note title"
                />
                <textarea
                    name="note-description"
                    id="note-description"
                    cols="30"
                    rows="10"
                    className="note-description border-2 border-gray-300 p-2 rounded-md mt-2"
                    placeholder="Note description"></textarea>
            </div>
            <button className="delete bg-red-500 text-white py-2 px-3">
                Delete
            </button>
        </div>
    );
}

export default Note;

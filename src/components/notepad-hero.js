import React from 'react';
import { useContext } from 'react';
import NoteContext from '../contexts/NoteContext';
import Note from './note';

function NotepadHero() {
    const noteContext = useContext(NoteContext);
    const notepadTitle = noteContext.state.notepadTitle;
    const notes = noteContext.state.notes;

    function addNote(e) {
        e.preventDefault();
        noteContext.dispatch({
            type: 'addNote',
            title: noteContext.state.currentNoteTitle,
            description: noteContext.state.currentNoteDescription,
        });
    }

    console.log(noteContext.notes);

    return (
        <div className="NotepadHero flex flex-col justify-center items-between w-1/2">
            <div className="title-container">
                <h1 className="notepad-title">Notepad Title</h1>
                <input
                    type="text"
                    className="notepad-title-input border-2 border-gray-300 p-2 rounded-md mt-2"
                    defaultValue={notepadTitle}
                    onChange={(e) => {
                        noteContext.dispatch({
                            type: 'notepad',
                            value: e.target.value,
                        });
                    }}
                />
            </div>
            <form
                className="notes-container flex flex-col justify-center items-start"
                onSubmit={(e) => addNote(e)}>
                <h2 className="my-notes ">My Notes</h2>
                <input
                    type="text"
                    className="note-title border-2 border-gray-300 p-2 rounded-md mt-2"
                    placeholder="Enter note title..."
                    onChange={(e) => {
                        noteContext.dispatch({
                            type: 'currentNoteTitle',
                            value: e.target.value,
                        });
                    }}
                />
                <textarea
                    name="note-input"
                    id="note-input"
                    cols="30"
                    rows="10"
                    className="border-2 border-gray-300 p-2 rounded-md mt-2"
                    placeholder="Enter note..."
                    onChange={(e) => {
                        noteContext.dispatch({
                            type: 'currentNoteDescription',
                            value: e.target.value,
                        });
                    }}></textarea>
                <button
                    type="submit"
                    className="note-submit bg-green-500 py-2 px-4 mt-2 text-white">
                    Add
                </button>
            </form>
            {notes.map((note, i) => {
                return (
                    <Note
                        title={note.noteTitle}
                        description={note.noteDescription}
                        key={i}
                    />
                );
            })}
        </div>
    );
}

export default NotepadHero;

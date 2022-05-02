import React from 'react';
import { useReducer } from 'react';
import 'tailwindcss/tailwind.css';
import ButtonOptions from './components/button-options';
import NotepadHero from './components/notepad-hero';
import NoteContext from './contexts/NoteContext';
import './styles/tailwind.sass';

function App() {
    const initialState = {
        currentNoteTitle: '',
        currentNoteDescription: '',
        notepadTitle: 'Hi there',
        notes: [
            {
                noteTitle: `Grover's Note`,
                noteDescription: `This is just a sample note.`,
            },
            {
                noteTitle: `Another Note`,
                noteDescription: `Another sample note.`,
            },
        ],
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'Update Notepad':
                return { ...state, notepadTitle: action.value };
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NoteContext.Provider value={{ dispatch: dispatch, state }}>
            <main className="App flex flex-col justify-center items-center">
                <div className="app-container flex flex-row flex-wrap justify-start items-start">
                    <NotepadHero />
                    <ButtonOptions />
                </div>
            </main>
        </NoteContext.Provider>
    );
}

export default App;

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
        notepadTitle: `Grover's Notepad`,
        notes: [],
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'notepad':
                return { ...state, notepadTitle: action.value };
            case 'currentNoteTitle':
                return { ...state, currentNoteTitle: action.value };
            case 'currentNoteDescription':
                return { ...state, currentNoteDescription: action.value };
            case 'addNote':
                return {
                    ...state,
                    notes: [
                        ...state.notes,
                        {
                            noteTitle: action.title,
                            noteDescription: action.description,
                        },
                    ],
                };
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

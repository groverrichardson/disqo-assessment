import React from 'react';

function ButtonOptions() {
    return (
        <div className="ButtonOptions">
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

export default ButtonOptions;

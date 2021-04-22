import React, { useState } from 'react';
import { Button } from './Button';

const InitialCounter = ({ onAddCounter }) => {
    const [initialCounter, setInitialCounter] = useState(0);
    const [invalid, setInvalid] = useState(false);

    const checkValidNum = (initialCounter) => {
        if (initialCounter >= 0) {
            onAddCounter(initialCounter)
        }
        else
        {
            setInvalid(true);
        }
    }

    return (
        <div>
            <h2 className="text-xl mb-2">Add Counter</h2>
            <div className="flex">
                <div className="flex-1 mr-1">
                    <input
                        type="number"
                        className="w-full px-2.5 py-1 focus:outline-none rounded-md"
                        placeholder="Enter the initial value"
                        value={initialCounter}
                        onChange={ e => setInitialCounter(e.target.value) }
                    />
                    {   
                        invalid ?
                        <p className="text-red-600 text-xs mt-1">Please enter at least 0.</p>
                        : null
                    }
                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={ () => checkValidNum(initialCounter) }
                    >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InitialCounter;
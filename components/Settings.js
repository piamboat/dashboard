import React, { useState } from 'react'
import { VerticalCard } from './Card'
import { Button, ButtonWidthFull } from './Button'

const Settings = ({ onClearWidgets, onSetAllZero }) => {
    const [selectedOption, setSelectedOption] = useState('Counter');

    return (
        <div>
            <h2 className="text-xl mb-4">Settings</h2>
            <VerticalCard>
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Statistics</h2>
            </VerticalCard>
            <VerticalCard>
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Reset Zone</h2>
                <div className="flex items-center">
                    <select 
                        className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm"
                        value={selectedOption}
                        onChange={e => setSelectedOption(e.target.value)}
                    >
                        <option value="Counter">All counters</option>
                        <option value="Timer">All timers</option>    
                    </select>
                    <Button
                        color="danger"
                        onClick={ () => onSetAllZero(selectedOption) }
                    >
                        Set zero
                    </Button>
                </div>
            </VerticalCard>
            <VerticalCard>
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Delete Zone</h2>
                <ButtonWidthFull onClick={ onClearWidgets } color="danger">Delete all widgets</ButtonWidthFull>
            </VerticalCard>
        </div>
    );
}

export default Settings;
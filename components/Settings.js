import React, { useState } from 'react'
import JustShoutInSettings from './JustShoutInSettings'
import { VerticalCard } from './Card'
import { Button, ButtonWidthFull } from './Button'

const Settings = ({ widgets, onClearWidgets, onSetAllZero, onSetJustShout }) => {
    const [selectedOption, setSelectedOption] = useState('Counter');
    let justShoutContent = '';
    let totalJustSayLength = 0;
    let totalJustShoutLength = 0;
    let totalCount = 0;
    let totalTime = 0;
    let coldestCity = 'N/A';
    let initTemp = 100;

    widgets.map(widget => {
        if (widget.title === 'JustSay') {
            totalJustSayLength = totalJustSayLength + widget.content.length;
        }
        else if (widget.title === 'JustShout') {
            totalJustShoutLength = totalJustShoutLength + widget.content.length;
            justShoutContent = widget.content;
        }
        else if (widget.title === 'Counter') {
            totalCount = totalCount + parseInt(widget.content);
        }
        else if (widget.title === 'Timer') {
            totalTime = totalTime + widget.content;
        }
        else if (widget.title === 'Weather') {
            const currTemp = widget.content.main.temp
            if(currTemp < initTemp) {
                coldestCity = widget.content.name;
                initTemp = currTemp;
            }
        }
    });

    return (
        <div>
            <h2 className="text-xl mb-4">Settings</h2>
            <VerticalCard>
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Statistics</h2>
                <div className="table">
                    <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">Total widgets: </div>
                        <div className="table-cell">{ widgets.length }</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">Total Just length: </div>
                        <div className="table-cell">{ totalJustSayLength + totalJustShoutLength }</div>
                    </div>
                    <div className="table-row"></div>
                        <div className="table-cell pr-4 font-semibold">Total count: </div>
                        <div className="table-cell">{ totalCount }
                    </div>
                    <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">Total time: </div>
                        <div className="table-cell">
                            <span>{(`0${Math.floor((totalTime / 60000) % 60)}`).slice(-2)}:</span>
                            <span>{(`0${Math.floor((totalTime / 1000) % 60)}`).slice(-2)}</span>
                        </div>
                    </div>
                    <div className="table-row"></div>
                        <div className="table-cell pr-4 font-semibold">Coldest cities: </div>
                        <div className="table-cell">{ coldestCity }
                    </div>
                </div>
            </VerticalCard>
            <JustShoutInSettings justShoutContent={justShoutContent} onSetJustShout={onSetJustShout} />
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
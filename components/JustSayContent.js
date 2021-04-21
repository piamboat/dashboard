import React, { useState } from 'react';
import Button from './Button';

const JustSayContent = ({ onAddJustSay }) => {
    const [justSayContent, setJustSayContent] = useState('');

    return (
        <div>
            <h2 className="text-xl mb-2">Add JustSay</h2>
            <div className="flex">
                <div className="flex-1 mr-1">
                    <input
                        type="text"
                        className="w-full px-2.5 py-1 focus:outline-none rounded-md"
                        placeholder="Enter text"
                        value={justSayContent}
                        onChange={ e => setJustSayContent(e.target.value) }
                    />
                    <p className="text-red-600 text-xs mt-1">{justSayContent.length < 3 ? 'Please enter at least 3 characters.' : ''}</p>
                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={() => onAddJustSay(justSayContent.trim())}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default JustSayContent;
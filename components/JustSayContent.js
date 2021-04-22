import React, { useState } from 'react';
import { Button } from './Button';

const JustSayContent = ({ id, content, onUpdateJustSay }) => {
    const [justSayContent, setJustSayContent] = useState(content);

    return (
        <div>
            <h2 className="text-xl mb-2">{ id ? 'Edit JustSay' : 'Add JustSay' }</h2>
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
                        onClick={() => id ? onUpdateJustSay(id, justSayContent.trim()) : onUpdateJustSay(justSayContent.trim())}
                    >
                        { id ? 'Edit' : 'Add' }
                    </Button>
                </div>
            </div>
        </div>
    );
}

JustSayContent.defaultProps = {
    id: null,
    content: ''
}

export default JustSayContent;
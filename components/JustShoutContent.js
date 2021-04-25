import React, { useState } from 'react';
import { Button } from './Button';

const JustShoutContent = ({ id, content, onUpdateJustShout }) => {
    const [justShoutContent, setJustShoutContent] = useState(content);

    return (
        <div>
            <h2 className="text-xl mb-2">{ id ? 'Edit JustShout' : 'Add JustShout' }</h2>
            <div className="flex">
                <div className="flex-1 mr-1">
                    <input
                        type="text"
                        className="w-full px-2.5 py-1 focus:outline-none rounded-md"
                        placeholder="Enter text"
                        value={justShoutContent}
                        onChange={ e => setJustShoutContent(e.target.value) }
                    />
                    <p className="text-red-600 text-xs mt-1">{justShoutContent.length < 3 ? 'Please enter at least 3 characters.' : ''}</p>
                </div>
                <div>
                    <Button
                        color="primary"
                        onClick={() => id ? onUpdateJustShout(id, justShoutContent.trim()) : onUpdateJustShout(justShoutContent.trim())}
                    >
                        { id ? 'Edit' : 'Add' }
                    </Button>
                </div>
            </div>
        </div>
    );
}

JustShoutContent.defaultProps = {
    id: null,
    content: ''
}

export default JustShoutContent;
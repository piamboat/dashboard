import React, { useState } from 'react';
import { VerticalCard } from './Card'
import { Button } from './Button'

const JustShoutInSettings = ({ justShoutContent, onUpdateContent }) => {
    const [content, setContent] = useState(justShoutContent);

    return (
        <VerticalCard>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustShout text</h2>
            <fieldset>
                <form className="flex">
                    <div className="flex-1 mr-1">
                        <input
                            type="text"
                            className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                            placeholder="Enter text"
                            value={content}
                            onChange={ e => setContent(e.target.value) }
                            disabled={ justShoutContent === '' ? true : false }
                        />
                    </div>
                    <div>
                        <Button
                            onClick={() => onSetJustShout(content)}
                            className="text-white focus:outline-none px-4 py-1 rounded-md"
                            color={ content === '' ? 'default' : 'primary' }
                            disabled={ justShoutContent === '' ? true : false }
                        >
                            Edit
                        </Button>
                    </div>
                </form>
            </fieldset>
        </VerticalCard>
    );
}

export default JustShoutInSettings;
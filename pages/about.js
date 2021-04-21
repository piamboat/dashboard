import React from 'react';

const about = () => {
    return (
        <React.Fragment>
            <h2 className="text-xl undefined">About</h2>
            <div className="pt-3">
                <div className="p-5 border-1 bg-white rounded-2xl">
                    <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                        {'I love <programming />'}
                    </h2>
                    <p>
                        Currently, we have only <strong>JustSay</strong>, <strong>Counter</strong> and <strong>Timer</strong> widgets.
                    </p>
                    <p>
                        You can now add more widgets or even destroy all of them, edit JustSay text, view super great useless statistics!!!
                    </p>
                    <p>Crafted with <span className="text-red-600">♥</span> by Boat.</p>
                </div>
            </div>
        </React.Fragment>

        
    );
}

export default about;
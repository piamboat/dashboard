import React from 'react';
import { Card } from './Card';

const CardNone = ({ onAddWidget }) => {
    return (
        <div className="md:inner md:w-1/2 pb-4 md:pr-4">
            <Card>
                <h2 className="text-lg font-bold text-gray-400 mb-1.5"></h2>
                <div className="text-center text-gray-400 my-8 font-light">
                    <p className="text-4xl mb-2">No widgets at all</p>
                    <p>
                        Click
                        <button
                            className="font-normal text-blue-400 focus:outline-none ml-1 mr-1"
                            onClick={ () => onAddWidget() }
                        >Here</button>
                        to add a new one
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default CardNone;
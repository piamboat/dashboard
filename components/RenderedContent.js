import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';
import { MdClose, MdEdit } from "react-icons/md";

const RenderedContent = ({ id, title, time, content, onDeleteWidget }) => {
    if ( title === 'JustSay' ) {
        return (
            <div className="md:inner md:w-1/2 pb-4 md:pr-4">
                <Card>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
                        <div>
                            <button className="text-lg text-gray-600 focus:outline-none mr-2">
                                <MdEdit />
                            </button>
                            <button className="text-lg text-gray-600 focus:outline-none undefined">
                                <MdClose onClick={() => onDeleteWidget(id)} />
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-8 mb-12">
                        <h1 className="text-4xl font-bold undefined">{content}</h1>
                    </div>
                    <div className="text-xs text-gray-400">
                        <div className="mt-6 -mb-2 text-center">
                            {time}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
    else if ( title === 'Counter' ) {
        const [counter, setCounter] = useState(parseInt(content));

        return (
            <div className="md:inner md:w-1/2 pb-4 md:pr-4">
                <Card>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
                        <div>
                            <button className="text-lg text-gray-600 focus:outline-none undefined">
                                <MdClose onClick={() => onDeleteWidget(id)} />
                            </button>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mt-4 mb-6">
                            <button
                                className={`text-5xl rounded-full w-10 text-center focus:outline-none ${counter <= 0 ? 'text-gray-300' : 'text-blue-500'}`}
                                disabled={ counter <= 0 ? true : false }
                                onClick={() => setCounter(counter-1)}
                            >
                                -
                            </button>
                            <div className="text-6xl mx-7">{counter}</div>
                            <button
                                className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
                                onClick={() => setCounter(counter+1)}
                            >
                                +
                            </button>
                        </div>
                        <Button
                            color={ counter !== 0 ? 'primary' : 'default' }
                            disabled={ counter !== 0 ? false : true }
                            onClick={() => setCounter(0)}
                        >
                            Set zero
                        </Button>
                    </div>
                    <div className="text-xs text-gray-400">
                        <div className="mt-6 -mb-2 text-center">
                            {time}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
    else // Timer
    {
        const [timer, setTimer] = useState(0);
        const [timerOn, setTimerOn] = useState(false);

        useEffect(() => {
            let interval = null;

            if (timerOn) { // start
                interval = setInterval(() => {
                    setTimer(prevTime => prevTime + 1000);
                }, 1000);
            }
            else // pause
            {
                clearInterval(interval);
            }

            return() => clearInterval(interval) // when unmount
        }, [timerOn])

        return (
            <div className="md:inner md:w-1/2 pb-4 md:pr-4">
                <Card>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
                        <div>
                            <button className="text-lg text-gray-600 focus:outline-none undefined">
                                <MdClose onClick={() => onDeleteWidget(id)} />
                            </button>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mt-4 mb-6">
                            <div className="text-6xl mx-7">
                                <span>{(`0${Math.floor((timer / 60000) % 60)}`).slice(-2)}:</span>
                                <span>{(`0${Math.floor((timer / 1000) % 60)}`).slice(-2)}</span>
                            </div>
                        </div>
                        <Button
                            color="primary"
                            onClick={ () => !timerOn ? setTimerOn(true) : setTimerOn(false) }
                        >
                            { timerOn ? 'Pause' : 'Start' }
                        </Button>
                        &nbsp;
                        <Button
                            color= { timer !== 0 ? 'primary' : 'default' }
                            disabled={ timer !== 0 ? false : true }
                            onClick={() => setTimer(0)}
                        >
                            Set zero
                        </Button>
                    </div>
                    <div className="text-xs text-gray-400">
                        <div className="mt-6 -mb-2 text-center">
                            {time}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default RenderedContent;
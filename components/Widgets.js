import React, { useState } from 'react';
import { RiAddCircleLine, RiIncreaseDecreaseLine } from "react-icons/ri";
import { BiBomb } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";
import Cards from './Cards';
import Modal from './Modal';
import JustSayContent from './JustSayContent';
import InitialCounter from './InitialCounter';
import Button from './Button';

const Widgets = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [widgets, setWidgets] = useState([]);
    

    const onAddJustSay = (content) => {
        // add to cards
        const id = Math.floor(Math.random() * 10000) + 1;
        const dateObj = new Date();
        const time = `Added on ${dateObj.toLocaleString("en-EN", {dateStyle: "medium"}).split(',')[0]}, ${dateObj.toLocaleString("en-EN", {year: "2-digit"})}, ${dateObj.toLocaleTimeString()}`
        const title = 'JustSay';
        const newWidget = { id, time, title, content };

        setWidgets([...widgets, newWidget])
        setModalActive(false);
    };    

    const onGetJustSayContent = () => {
        setModalContent(
            <JustSayContent onAddJustSay={onAddJustSay} />
        );
    }

    const onAddCounter = (content) => {
        // add to cards
        const id = Math.floor(Math.random() * 10000) + 1;
        const dateObj = new Date();
        const time = `Added on ${dateObj.toLocaleString("en-EN", {dateStyle: "medium"}).split(',')[0]}, ${dateObj.toLocaleString("en-EN", {year: "2-digit"})}, ${dateObj.toLocaleTimeString()}`
        const title = 'Counter';
        const newWidget = { id, time, title, content };

        setWidgets([...widgets, newWidget])
        setModalActive(false);
    };    

    const onGetInitialCounter = () => {
        setModalContent(
            <InitialCounter onAddCounter={onAddCounter} />
        );
    }

    const onAddTimer = () => {
        // add to cards
        const id = Math.floor(Math.random() * 10000) + 1;
        const dateObj = new Date();
        const time = `Added on ${dateObj.toLocaleString("en-EN", {dateStyle: "medium"}).split(',')[0]}, ${dateObj.toLocaleString("en-EN", {year: "2-digit"})}, ${dateObj.toLocaleTimeString()}`
        const title = 'Timer';
        const content = '';
        const newWidget = { id, time, title, content };

        setWidgets([newWidget, ...widgets])
        setModalActive(false);
    }

    const onAddWidget = () => {
        setModalContent(
            <div>
                <h2 className="text-xl undefined">Add widget</h2>
                <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
                    <div className="w-1/3 pt-1.5 pl-1.5">
                        <div
                            className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={onGetJustSayContent}
                        >    
                            <AiOutlineMessage className="mx-auto text-4xl" />
                            <h3 className="mt-1 font-semibold text-sm">JustSay</h3>
                        </div>
                    </div>
                    <div className="w-1/3 pt-1.5 pl-1.5">
                        <div
                            className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={onGetInitialCounter}
                        >                            
                            <RiIncreaseDecreaseLine className="mx-auto text-4xl" />
                            <h3 className="mt-1 font-semibold text-sm">Counter</h3>
                        </div>
                    </div>
                    <div className="w-1/3 pt-1.5 pl-1.5">
                        <div
                            className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={onAddTimer}
                        >
                            <IoTimerOutline className="mx-auto text-4xl" />
                            <h3 className="mt-1 font-semibold text-sm">Timer</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
        setModalActive(true);
    };

    const onClearWidget = () => {
        setWidgets([]);
    }

    const onCancel = () => {
        setModalActive(false);
    };
    
    return (
        <React.Fragment>
            {modalActive && (
                <Modal onCancel={onCancel}>
                    {modalContent}
                </Modal>
            )}
            <h2 className="text-xl undefined">Widgets</h2>
            <div className="pt-3">
                <div className="mb-4">
                    <Button
                        color="primary"
                        onClick={onAddWidget}
                    >
                        <RiAddCircleLine className="inline-block text-xl relative -top-0.5 mr-1" />
                        Add Widget
                    </Button>
                    &nbsp;
                    <Button
                        onClick={onClearWidget}
                        disabled={widgets.length === 0 ? true : false}
                    >
                        <BiBomb className="inline-block text-xl relative -top-0.5 mr-1" />
                        Clear all
                    </Button>
                </div>
                <div className="md:flex md:flex-wrap md:-mr-4">
                    <Cards widgets={widgets} onAddWidget={onAddWidget} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Widgets;
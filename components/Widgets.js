import React, { useEffect, useState } from 'react';
import { RiAddCircleLine, RiIncreaseDecreaseLine, RiSettings3Line } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";
import Cards from './Cards';
import Modal from './Modal';
import { Button } from './Button';
import JustSayContent from './JustSayContent';
import InitialCounter from './InitialCounter';
import Settings from './Settings';

const Widgets = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [openSettings, setOpenSettings] = useState(false);
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        if (openSettings) {
            setModalContent(
                <Settings widgets={widgets} onClearWidgets={onClearWidgets} onSetAllZero={onSetAllZero} />
            );
            setModalActive(true);
        }
    }, [widgets])
    
    const onUpdateContent = (id, content) => {
        let newWidgets = [...widgets];
        newWidgets.map(widget => {
            if ( widget.id === id ) widget.content = content;
        });

        setWidgets(newWidgets);
    };  

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
            <JustSayContent onUpdateJustSay={onAddJustSay} />
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
        const content = 0;
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

    const onDeleteWidget = (id) => {
        // filter out selected id
        setWidgets(widgets.filter( widget => widget.id !== id ));
    }

    const onCancel = () => {
        setModalActive(false);
        if (openSettings) setOpenSettings(false);
    };

    const onClearWidgets = () => {
        setWidgets([]);
    }

    const onSetAllZero = (title) => {
        let newWidgets = [...widgets];
        newWidgets.map(widget => {
            if (widget.title === title) {
                widget.content = 0
            }
        });

        setWidgets(newWidgets);
        setModalActive(false);
    }

    const openSettingsPage = () => {
        setModalContent(
            <Settings widgets={widgets} onClearWidgets={onClearWidgets} onSetAllZero={onSetAllZero} />
        );
        setModalActive(true);
        setOpenSettings(true);
    }
    
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
                        onClick={openSettingsPage}
                    >
                        <RiSettings3Line className="inline-block text-xl relative -top-0.5 mr-1" />
                        Settings
                    </Button>
                </div>
                <div className="md:flex md:flex-wrap md:-mr-4">
                    <Cards 
                        widgets={widgets}
                        onAddWidget={onAddWidget}
                        onDeleteWidget={onDeleteWidget}
                        onUpdateContent={onUpdateContent}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Widgets;
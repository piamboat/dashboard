import React from 'react'
import CardNone from './CardNone';
import RenderedContent from './RenderedContent'

const Cards = ({ widgets, onAddWidget, onDeleteWidget }) => {
    let renderedCards = <CardNone onAddWidget={onAddWidget} />

    if (widgets.length > 0) {
        renderedCards = widgets.map( ({id, title, time, content}) => {
            return <RenderedContent key={id} id={id} title={title} time={time} content={content} onDeleteWidget={onDeleteWidget} />
        });
    }

    return (
        <React.Fragment>
            { renderedCards }
        </React.Fragment>
    );
}

export default Cards
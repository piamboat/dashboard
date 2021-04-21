import React from 'react'
import CardNone from './CardNone';
import RenderedContent from './RenderedContent'

const Cards = ({ widgets, onAddWidget }) => {
    let renderedCards = <CardNone onAddWidget={onAddWidget} />

    if (widgets.length > 0) {
        renderedCards = widgets.map( ({id, title, time, content}) => {
            return <RenderedContent key={id} title={title} time={time} content={content} />
        });
    }

    return (
        <React.Fragment>
            { renderedCards }
        </React.Fragment>
    );
}

export default Cards
import React from 'react';

import './event.css'
import PropTypes from 'prop-types';


class Event extends React.Component {

    render() {
        let element = this.props.element;

        return (
            <div
                data-testid={element.id}
                id={element.id}
                className={`event ${element.margin} minutes-${element.duration}`}>
                {element.id}
            </div>
        )
    }
};

Event.propTypes = {
    element: PropTypes.shape({
        id: PropTypes.number.isRequired,
        margin: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired
    })
};

export default Event;
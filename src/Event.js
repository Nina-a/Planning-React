import './Event.css'
import PropTypes from 'prop-types';


function Event(props) {

    const element = props.element;

    return (
        <div id={element.id} className={`event ${element.margin} minutes-${element.duration}`}>{element.id}</div>
    )
};

Event.propTypes = {
    element: PropTypes.shape({
        id: PropTypes.number.isRequired,
        margin: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired
    })
};

export default Event;
import './TimeMarker.css';
import PropTypes from 'prop-types';


function TimeMarker(props) {

    const time = props.times

    return (
        <div id={time} className="time-marker"> {time}</div>
    )
}

TimeMarker.propTypes = {
    time: PropTypes.string,
}

export default TimeMarker;
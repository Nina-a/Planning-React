import './TimeMarker.css'


function TimeMarker(props) {

    const time = props.times

    return (
        <div id={time} className="time-marker"> {time}</div>
    )
}

export default TimeMarker;
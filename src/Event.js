import './Event.css'

function Event(props) {

    const element = props.element;

    return (
        <div className={`event ${element.margin} minutes-${element.duration}`}> {element.start}</div>
    )
};

export default Event;
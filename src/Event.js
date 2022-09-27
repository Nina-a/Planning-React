import './Event.css'

function Event(props) {

    const element = props.element;

    return (
        <div className={`event ${element.margin} minutes-${element.duration}`}> {element.id}</div>
    )
};

export default Event;
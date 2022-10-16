import React from "react";
import "./timemarker.css";
import PropTypes from "prop-types";

class TimeMarker extends React.Component {
  render() {
    const time = this.props.times;

    return (
      <div data-testid={time} id={time} className="time-marker">
        {time}
      </div>
    );
  }
}

TimeMarker.propTypes = {
  time: PropTypes.string,
};

export default TimeMarker;

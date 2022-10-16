/* eslint-disable array-callback-return */
import React from "react";
import "./timeslot.css";
import Event from "./event";
import PropTypes from "prop-types";

class TimeSlot extends React.Component {
  render() {
    const horaire = this.props.horaires;

    const data = this.props.datas;

    let numberOfEventWithSameStart = 0;

    let horaires = [];
    let i = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      if (element.startTime === horaire) {
        numberOfEventWithSameStart++;
        horaires[i] = {
          debut: data[index].startInMinutes,
          fin: data[index].endInMinutes,
          margin: data[index].margin,
          duration: data[index].duration,
          element: element,
        };
        i++;
      }
    }

    horaires.sort(function (a, b) {
      return a.debut - b.debut;
    });

    // Détermine if events are on the same timeslot
    let isNotTheSamePlageHoraire = false;
    let isTheSamePlageHoraire = false;

    for (let index = 0; index < horaires.length - 1; index++) {
      if (horaires[index].fin < horaires[index + 1].debut) {
        isNotTheSamePlageHoraire = true;
      } else {
        isTheSamePlageHoraire = true;
      }
    }

    if (isNotTheSamePlageHoraire === false) {
      isNotTheSamePlageHoraire = false;
    } else {
      if (isTheSamePlageHoraire === true) {
        isNotTheSamePlageHoraire = false;
      } else {
        isNotTheSamePlageHoraire = true;
      }
    }

    // calculated of margin if event are on the same slot but one after the other
    if (isNotTheSamePlageHoraire && numberOfEventWithSameStart > 1) {
      for (let index = 1; index < horaires.length; index++) {
        const minutes = horaires[index].element.start.slice(3, 5);

        horaires[index].element.margin = "margin-".concat(
          parseInt(minutes) - parseInt(horaires[index - 1].duration)
        );
      }
    }

    return (
      <div
        data-testid={horaire}
        id={horaire}
        className="tiemeSlot"
        style={{
          flexWrap: isNotTheSamePlageHoraire ? "wrap" : "",
        }}>
        {horaires.map((event) => {
          if (event.element.startTime === horaire) {
            return <Event key={event.element.id} element={event.element} />;
          }
        })}
      </div>
    );
  }
}

TimeSlot.propTypes = {
  horaires: PropTypes.string.isRequired,
  datas: PropTypes.array.isRequired,
};

export default TimeSlot;

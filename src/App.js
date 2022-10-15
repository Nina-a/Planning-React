
import React from 'react';
import './app.css';
import TimeMarker from './timemarker';
import datas from './input.json'

import TimeSlot from './timeslot';

class App extends React.Component {

  render() {
  datas.forEach(element => {
    const minutes = element.start.slice(3, 5);
    element.margin = "margin-".concat(minutes);
    const startTime = element.start.slice(0, 2);
    element.startTime = startTime.concat('h');

    const duration = element.duration;

    // Calcul de l'heure de fin de l'évenement
    const hourStartInNumber = parseInt(startTime);
    const minutesStartInNumber = parseInt(minutes);
    const hourStartInMinutes = hourStartInNumber * 60 + minutesStartInNumber;
    const hourEndInMinutes = hourStartInMinutes + duration;

    const horaireEnd = Math.trunc(hourEndInMinutes / 60);
    element.startInMinutes = hourStartInMinutes;
    element.endInMinutes = hourEndInMinutes;
    element.horaireEnd = horaireEnd.toString().concat('h');
  });

  const timeMarker = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM"
  ];

  const timeSlots = [
    "09h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h"
  ];

  return (
    <div className="App">
      <div data-testid="timeline-contenair" className="timeline">
        {timeMarker.map((times) =>
          <TimeMarker key={times} times={times} />)}
      </div>

      <div data-testid="calendar-contenair" className='calendar'>
        {timeSlots.map((horaires) =>
          <TimeSlot key={horaires} horaires={horaires} datas={datas} />
        )}
      </div>
    </div>
  );
  }
}

export default App;

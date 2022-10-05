
import './App.css';
import TimeMarker from './TimeMarker';
import datas from './input.json'

import PlageHoraire from './PlageHoraire';

function App() {

  datas.forEach(element => {
    var minutes = element.start.slice(3, 5);
    element.margin = "margin-".concat(minutes);
    const horaireStart = element.start.slice(0, 2);
    element.horaireStart = horaireStart.concat('h');

    var durationEnNombre = parseInt(element.duration);

    // Calcul de l'heure de fin de l'évenement
    var heureDebutEnNombre = parseInt(horaireStart);
    var minutesDebutEnNombre = parseInt(minutes);
    var heureDebutEnMinutes = heureDebutEnNombre * 60 + minutesDebutEnNombre;
    var heureFinEnMinutes = heureDebutEnMinutes + durationEnNombre;

    var horaireEnd = Math.trunc(heureFinEnMinutes / 60);
    element.debutEnMinutes = heureDebutEnMinutes;
    element.FinEnMinutes = heureFinEnMinutes;
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

  const plageHoraire = [
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
        {plageHoraire.map((horaires) =>
          <PlageHoraire key={horaires} horaires={horaires} datas={datas} />
        )}
      </div>
    </div>
  );
}

export default App;

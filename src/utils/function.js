export function parseEvent(event) {
  const minutes = event.start.slice(3, 5);
  event.margin = "margin-".concat(minutes);
  const startTime = event.start.slice(0, 2);
  event.startTime = startTime.concat("h");

  const duration = event.duration;

  // Calcul de l'heure de fin de l'évenement
  const hourStartInNumber = parseInt(startTime);
  const minutesStartInNumber = parseInt(minutes);
  const hourStartInMinutes = hourStartInNumber * 60 + minutesStartInNumber;
  const hourEndInMinutes = hourStartInMinutes + duration;

  const horaireEnd = Math.trunc(hourEndInMinutes / 60);
  event.startInMinutes = hourStartInMinutes;
  event.endInMinutes = hourEndInMinutes;
  event.horaireEnd = horaireEnd.toString().concat("h");

  return event;
}

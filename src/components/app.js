import React from "react";
import "./app.css";
import TimeMarker from "./timemarker";
import datas from "../utils/input.json";
import TimeSlot from "./timeslot";
import { timeMarker, timeSlots } from "../utils/constants";
import { parseEvent } from "../utils/function";

class App extends React.Component {
  render() {
    let events = datas.map((element) => parseEvent(element));

    return (
      <div className="App">
        <div data-testid="timeline-contenair" className="timeline">
          {timeMarker.map((times) => (
            <TimeMarker key={times} times={times} />
          ))}
        </div>

        <div data-testid="calendar-contenair" className="calendar">
          {timeSlots.map((horaires) => (
            <TimeSlot key={horaires} horaires={horaires} datas={events} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

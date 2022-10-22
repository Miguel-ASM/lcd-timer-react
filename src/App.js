import "./App.scss";

import { Button } from "antd";
import { useState } from "react";

import Display from "./components/Display/Display";
import { centiSecondsToDisplayString } from "./helpers/helpers";
import { useTimer } from "./hooks/useTimer";
import Laps from "./components/Laps/Laps";

function App() {
  const [lapTime, setLapTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const { centiSeconds, timerRunning, toggleIsRunnning, reset } = useTimer();

  const resetTimer = () => {
    reset();
    setLaps([]);
    setLapTime(0);
  };

  const addLap = () => {
    setLaps((laps) => {
      const newLap = centiSeconds - lapTime;
      return [...laps, newLap];
    });
    setLapTime(centiSeconds);
  };

  return (
    <div className="App">
      <div className="timer">
        <Display digitsString={centiSecondsToDisplayString(centiSeconds)} />
        <div className="timer_buttons">
          {timerRunning ? (
            <Button
              className="timer_buttons_button"
              type="primary"
              onClick={addLap}
            >
              LAP
            </Button>
          ) : (
            <Button
              className="timer_buttons_button"
              type="secondary"
              onClick={resetTimer}
            >
              RESET
            </Button>
          )}
          <Button
            className="timer_buttons_button"
            type="primary"
            onClick={toggleIsRunnning}
          >
            {timerRunning ? "PAUSE" : centiSeconds === 0 ? "START" : "RESUME"}
          </Button>
        </div>
      </div>
      {laps.length > 0 && <Laps laps={laps} />}
    </div>
  );
}

export default App;

import "./App.scss";
import { Button, Table } from "antd";
import Display from "./components/Display/Display";
import { centiSecondsToDisplayString } from "./helpers/helpers";
import { useEffect, useState } from "react";

function App() {
  const [centiSeconds, setCentiSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [runningTimeOut, setRunningTimeOut] = useState(null);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (timerRunning) {
      const newTimeOut = setTimeout(() => {
        setCentiSeconds((centiSeconds) => {
          return centiSeconds + 1;
        });
      }, 10);
      setRunningTimeOut(newTimeOut);
    }
  }, [centiSeconds, timerRunning]);

  const toggleIsRunnning = () => {
    if (timerRunning) clearTimeout(runningTimeOut);
    setTimerRunning((x) => !x);
  };

  const resetTimer = () => {
    setCentiSeconds(0);
    setTimerRunning(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps((laps) => [...laps, centiSecondsToDisplayString(centiSeconds)]);
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
      <Table></Table>
    </div>
  );
}

export default App;

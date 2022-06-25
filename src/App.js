import "./App.scss";
import { Button } from "antd";
import Display from "./components/Display/Display";
import { secondsToDisplayString } from "./helpers/helpers";
import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [runningTimeOut, setRunningTimeOut] = useState(null);

  useEffect(() => {
    if (timerRunning) {
      const newTimeOut = setTimeout(() => {
        setSeconds((seconds) => {
          return seconds + 1;
        });
      }, 1000);
      setRunningTimeOut(newTimeOut);
    }
  }, [seconds, timerRunning]);

  const toggleIsRunnning = () => {
    if (timerRunning) clearTimeout(runningTimeOut);
    setTimerRunning((x) => !x);
  };

  const resetTimer = () => {
    setSeconds(0);
    setTimerRunning(false);
  };

  return (
    <div className="App">
      <div className="timer">
        <Display digitsString={secondsToDisplayString(seconds)} />
        <div className="timer_buttons">
          {!timerRunning && (
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
            {timerRunning ? "PAUSE" : seconds === 0 ? "START" : "RESUME"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

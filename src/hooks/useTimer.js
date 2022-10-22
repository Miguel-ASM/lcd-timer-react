import { useEffect, useState } from "react";

export const useTimer = () => {
  const [centiSeconds, setCentiSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [runningTimeOut, setRunningTimeOut] = useState(null);

  const toggleIsRunnning = () => {
    if (timerRunning) clearTimeout(runningTimeOut);
    setTimerRunning((x) => !x);
  };

  const reset = () => {
    setCentiSeconds(0);
    setTimerRunning(false);
  };

  useEffect(() => {
    if (timerRunning) {
      const newTimeOut = setInterval(() => {
        setCentiSeconds((prev) => {
          return prev + 1;
        });
      }, 10);
      setRunningTimeOut(newTimeOut);
    }
  }, [timerRunning]);

  return {
    centiSeconds,
    timerRunning,
    toggleIsRunnning,
    reset
  };
};

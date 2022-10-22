import { useState, useCallback } from "react";

export const useTimer = () => {
  const [centiSeconds, setCentiSeconds] = useState(0);
  const [runningTimeOut, setRunningTimeOut] = useState(null);
  const timerRunning = !!runningTimeOut;

  const resumeTimer = useCallback(() => {
    setRunningTimeOut(
      setInterval(() => {
        setCentiSeconds((prev) => {
          return prev + 1;
        });
      }, 10)
    );
  }, []);

  const toggleIsRunnning = useCallback(() => {
    clearInterval(runningTimeOut);
    !!runningTimeOut ? setRunningTimeOut(null) : resumeTimer();
  }, [runningTimeOut, resumeTimer]);

  const reset = () => {
    setCentiSeconds(0);
  };

  return {
    centiSeconds,
    timerRunning,
    toggleIsRunnning,
    reset,
  };
};

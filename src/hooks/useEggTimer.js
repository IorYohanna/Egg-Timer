import { useEffect, useRef, useState } from 'react';

export function useEggTimer() {
  const [totalTime, setTotalTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const pause = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setTotalTime(0);
  };

  const setTimer = seconds => {
    setIsRunning(false);
    setTotalTime(seconds);
    setTimeLeft(seconds);
  };

  return {
    totalTime,
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
    setTimer,
  };
}

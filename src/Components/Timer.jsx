import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <p>Tiempo: {seconds} segundos</p>
      <button onClick={() => setRunning(true)}>Iniciar</button>
      <button onClick={() => { setRunning(false); setSeconds(0); }}>Parar</button>
    </div>
  );
};

export default Timer;

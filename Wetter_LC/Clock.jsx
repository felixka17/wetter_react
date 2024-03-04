import React, { useState, useEffect } from 'react';
import './Clock.css'; // Import der CSS-Datei für die Clock-Komponente

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = ('0' + date.getHours()).slice(-2); // Stunden im Format HH
      const minutes = ('0' + date.getMinutes()).slice(-2); // Minuten im Format MM
      setCurrentTime(`${hours} <span class="blink">:</span> ${minutes}`); // Doppelpunkt als HTML-Span-Element mit blinkender CSS-Klasse
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container" dangerouslySetInnerHTML={{ __html: currentTime }}></div>
  );
};

export default Clock;

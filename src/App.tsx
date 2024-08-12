import { useEffect } from "react";
import './index.css'


function App() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const matrixColumns = document.querySelectorAll<HTMLDivElement>('.matrix-column');
      matrixColumns.forEach((column) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        column.innerText = text;
      });
    }, 50);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="matrix-bg">
      {Array.from({ length: Math.floor(window.innerWidth / 20) }).map((_, index) => (
        <div key={index} className="matrix-column" style={{ left: `${index * 20}px` }}>|</div>
      ))}
    </div>
  );
}

export default App

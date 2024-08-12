import { useEffect } from "react";
import './index.css'


function App() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const matrixLines = document.querySelectorAll<HTMLDivElement>('.matrix-line');
      matrixLines.forEach((line) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        line.innerText = text;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="matrix-bg">
      {Array.from({ length: Math.floor(window.innerWidth / 20) }).map((_, columnIndex) => (
        <div key={columnIndex} className="matrix-column" style={{ left: `${columnIndex * 20}px` }}>
          {Array.from({ length: 20 }).map((_, lineIndex) => (
            <div key={lineIndex} className="matrix-line">|</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App

import { useEffect } from "react";
import './index.css'


function App() {
  const words = ['APP_REGISTRATION', '@MSAL', 'ID', 'TENANT', 'Oauth 2.0', 'OIDC'];
    useEffect(() => {
      const intervalId = setInterval(() => {
        const matrixLines = document.querySelectorAll<HTMLDivElement>('.matrix-line');
        matrixLines.forEach((line) => {
          const randomIndex = Math.floor(Math.random() * words.length);
          line.innerText = Math.random() < 0.05 ? words[randomIndex] : String.fromCharCode(0x30A0 + Math.random() * 96);
        });
      }, 50);
  
      return () => clearInterval(intervalId); // Cleanup interval on unmount
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
        <div>Look again</div>
      </div>
    );
}

export default App

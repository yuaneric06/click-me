import { useState } from 'react';
import './App.css';

export default function App() {
  const [clicksLeft, setClicksLeft] = useState(1000);

  const handleClick = () => {
    setClicksLeft((currClicks) => {
      return currClicks - 1;
    });
    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }, 10000);
  }
  return (
    <main>
      <button onClick={handleClick}>Click me {String(clicksLeft)} times</button>
    </main>
  )
}
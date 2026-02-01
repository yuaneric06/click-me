import { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [clicksLeft, setClicksLeft] = useState(1000);
  const [popupsAllowed, setPopupsAllowed] = useState(false);
  const [usingAutoclicker, setUsingAutoclicker] = useState(true);
  const prevClickTime = useRef(null);

  useEffect(() => {
    const checkPopups = () => {
      const testPopup = window.open("", "_blank");
      if (!testPopup) {
        setPopupsAllowed(false);
      }
      else {
        testPopup.close();
        setPopupsAllowed(true);
      }
    }
    checkPopups();
  }, []);

  const handleClick = () => {
    const currTime = Date.now();
    console.log("curr time: ", currTime);
    console.log("prev time: ", prevClickTime.current);
    if (prevClickTime.current !== null && currTime - prevClickTime.current < 100) {
      setUsingAutoclicker(true);
      setClicksLeft((currClicks) => {
        return currClicks - 1;
      });
      setTimeout(() => {
        window.open("https://yuaneric06.github.io/click-me", "_blank");
      }, 10000);
    }
    else {
      setClicksLeft(1000);
      setUsingAutoclicker(false);
    }
    prevClickTime.current = currTime;
  }

  return (
    <main>
      {popupsAllowed ? <button onClick={handleClick}>Click me {String(clicksLeft)} times</button> : <p>Enable popups for this page and reload</p>}
      {!usingAutoclicker && <p>Use <a color="white" href="https://sourceforge.net/projects/orphamielautoclicker/" target="_blank">this</a> autoclicker, set the delay to 1 ms</p>}
    </main>
  )
}
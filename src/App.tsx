import { useState, useEffect } from "react";
import "./App.css";
import Quotes from "./Components/Quotes";
import CurrentData from "./Components/CurrentData";

import bgImageDaytime from "./assets/mobile/bg-image-daytime.jpg";
import bgImageNighttime from "./assets/mobile/bg-image-nighttime.jpg";

function App() {
  const [time, setTime] = useState(new Date());

  const onTimeChange = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(onTimeChange, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let backgroundImage = bgImageDaytime;
  const hour = time.getHours();

  if (hour >= 18 || hour < 5) {
    backgroundImage = bgImageNighttime;
  }

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={headerStyle}>
      <Quotes />
      <CurrentData />
    </div>
  );
}

export default App;

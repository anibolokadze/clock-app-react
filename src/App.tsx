import { useState, useEffect } from "react";
import Quotes from "./Components/Quotes";
import CurrentData from "./Components/CurrentData";

function App() {
  const [time, setTime] = useState(new Date());

  const onTimeChange = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(onTimeChange, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let backgroundImage = "bg-image-daytime.jpg";
  const hour = time.getHours();

  if (hour >= 18 || hour < 5) {
    backgroundImage = "bg-image-nighttime.jpg";
  }

  const headerStyle = {
    backgroundImage: `url("assets/mobile/${backgroundImage}")`,
    height: "100vh",
  };

  return (
    <div style={headerStyle}>
      <Quotes />
      <CurrentData />
    </div>
  );
}

export default App;

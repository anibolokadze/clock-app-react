import { useEffect, useState } from "react";
import style from "../../App.module.css";

export default function CurrentData() {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const city = { timeZone }.timeZone.split("/").pop();

  const localTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const dayOfTheYear = function getDayOfTheYear(date = new Date()) {
    const timestamp1 = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);
    const differenceInMilliseconds = timestamp1 - timestamp2;
    const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
    return differenceInDays;
  };

  const weekNumber = () => {
    const date = new Date();
    const time = date.getTime();
    const yearStart = new Date(date.getFullYear(), 0, 1).getTime();
    const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const result = Math.floor((time - yearStart) / weekInMilliseconds) + 1;
    return result;
  };

  const handleClick = () => {
    setShow((current) => !current);
  };

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  let greeting;
  if (time.getHours() >= 5 && time.getHours() < 12) {
    greeting = "GOOD MORNING, IT’S CURRENTLY";
  } else if (time.getHours() >= 12 && time.getHours() < 18) {
    greeting = "GOOD AFTERNOON, IT’S CURRENTLY";
  } else {
    greeting = "GOOD EVENING, IT’S CURRENTLY";
  }

  return (
    <>
      <div className={style.container}>
        <h2 className="evening">{greeting}</h2>
        <div className="day">
          <p>{localTime}</p>
          <p>In {city}</p>
        </div>
        <button onClick={handleClick}>Click</button>
        {show && (
          <div>
            <div>{timeZone}</div>
            <p>Day of the year: {dayOfTheYear(new Date())}</p>
            <p>Day of the week {time.getDay() + 1}</p>
            <p>Week number: {weekNumber()}</p>
          </div>
        )}
      </div>
    </>
  );
}

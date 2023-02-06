import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  const localTime = time.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

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

  useEffect(() => {
    setInterval(() => setTime(new Date()));
  }, []);

  return (
    <>
      {parseInt(localTime) > 20 || parseInt(localTime) < 6 ? (
        <>
          <h2 className="morning">morning</h2>
          <div className="day">
            <div>{timeZone}</div>
            <p>{localTime}</p>
            <p>Day of the year: {dayOfTheYear(new Date())}</p>
            <p>
              Day of the week
              {time.getDay()}
            </p>
          </div>
        </>
      ) : (
        <>
          <h2 className="evening">evening</h2>
          <div className="day">
            <div>{timeZone}</div>
            <p>{localTime}</p>
            <p>Day of the year: {dayOfTheYear(new Date())}</p>
            <p>
              Day of the week
              {time.getDay()}
            </p>
          </div>
        </>
      )}
    </>
  );
}

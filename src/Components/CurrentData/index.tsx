import { useEffect, useState } from "react";
import DayImg from "../../assets/mobile/bg-image-daytime.jpg";
export default function CurrentData() {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const city = { timeZone }.timeZone.split("/").pop();

  const localTime = time.toLocaleString("en-US", {
    hour: "2-digit",
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

  const handleClick = () => {
    setShow((current) => !current);
  };

  useEffect(() => {
    setInterval(() => setTime(new Date()));
  }, []);

  return (
    <>
      <div>
        {parseInt(localTime) > 20 || parseInt(localTime) < 7 ? 
          <div>
            <img src={DayImg} />
            <h2 className="evening">GOOD EVENING, IT’S CURRENTLY</h2>
            <div className="day">
              <p>{localTime}</p>
              <p>In {city}</p>
            </div>

            <button onClick={handleClick}>Click</button>
            {show && (
              <div>
                <div>{timeZone}</div>
                <p>Day of the year: {dayOfTheYear(new Date())}</p>
                <p>
                  Day of the week
                  {time.getDay()}
                </p>
              </div>
            )}
          </div>
        : 
          <div>
            <h2 className="evening">GOOD MORNING, IT’S CURRENTLY</h2>
            <div className="day">
              <p>{localTime}</p>
              <p>In {city}</p>
            </div>

            <button onClick={handleClick}>Click</button>

            {show && (
              <div>
                <div>{timeZone}</div>
                <p>Day of the year: {dayOfTheYear(new Date())}</p>
                <p>
                  Day of the week
                  {time.getDay()}
                </p>
              </div>
            )}
          </div>
        }
      </div>
      <div></div>
    </>
  );
}

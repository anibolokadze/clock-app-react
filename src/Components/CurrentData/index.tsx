import { useEffect, useState } from "react";
import style from "./CurrentData.module.scss";

import moonIcon from "../../assets/desktop/icon-moon.svg";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import arrowDown from "../../assets/desktop/icon-arrow-down.svg";
import arrowUp from "../../assets/desktop/icon-arrow-up.svg";
export default function CurrentData() {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const [icon, setIcon] = useState("");
  const [greeting, setGreeting] = useState("");

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const city = { timeZone }.timeZone.split("/").pop();

  const localTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
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
    const time = new Date();
    let newIcon;
    let newGreeting;
    if (time.getHours() >= 5 && time.getHours() < 12) {
      newIcon = sunIcon;
      newGreeting = "GOOD MORNING, IT’S CURRENTLY";
    } else if (time.getHours() >= 12 && time.getHours() < 18) {
      newIcon = sunIcon;
      newGreeting = "GOOD AFTERNOON, IT’S CURRENTLY";
    } else {
      newIcon = moonIcon;
      newGreeting = "GOOD EVENING, IT’S CURRENTLY";
    }
    setIcon(newIcon);
    setGreeting(newGreeting);
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.greeting}>
          <img src={icon} alt="icon" />
          <h2>{greeting}</h2>
        </div>

        <div className={style.info}>
          <p>{localTime}</p>
          <p>In {city}</p>
        </div>
      </div>
      <div className={style.btnWrapper}>
        <button
          onClick={handleClick}
          className={`${style.showBtn} ${show ? style.showBtnActive : ""}`}
        >
          {show ? "LESS" : "MORE"}
          <div className={style.img}>
            <img
              src={show ? arrowUp : arrowDown}
              alt={show ? "arrow-up" : "arrow-down"}
              className={style.arrowIcon}
            />
          </div>
        </button>

        {show && (
          <div className={style.show}>
            <div className={style.flex}>
              <p>CURRENT TIMEZONE: </p>
              <h3>{timeZone}</h3>
            </div>
            <div className={style.flex}>
              <p>Day of the year: </p>
              <h3>{dayOfTheYear(new Date())}</h3>
            </div>
            <div className={style.flex}>
              <p>Day of the week: </p>
              <h3>{time.getDay() + 1}</h3>
            </div>
            <div className={style.flex}>
              <p>Week number: </p>
              <h3>{weekNumber()}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

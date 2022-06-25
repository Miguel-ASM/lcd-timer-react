import Digit from "../Digit/Digit";
import "./Display.scss";
export default function Display({ digitsString }) {
  //digitsString = XX:YY
  const minutesTen = digitsString.split(":")[0][0];
  const minutes = digitsString.split(":")[0][1];
  const secondsTen = digitsString.split(":")[1][0];
  const seconds = digitsString.split(":")[1][1];
  return (
    <div className="timer-display">
      <Digit digit={minutesTen} />
      <Digit digit={minutes} />
      <div className="points-container">
        <div className="point"></div>
        <div className="point"></div>
      </div>
      <Digit digit={secondsTen} />
      <Digit digit={seconds} />
    </div>
  );
}

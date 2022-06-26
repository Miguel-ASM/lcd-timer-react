import Digit from "../Digit/Digit";
import "./Display.scss";
export default function Display({ digitsString }) {
  //digitsString = mm:SS.ss
  const [minutes, seconds, centiSeconds] = digitsString.split(/[:.]/);
  return (
    <div className="timer-display">
      <Digit digit={minutes[0]} />
      <Digit digit={minutes[1]} />
      <div className="points-container">
        <div className="point"></div>
        <div className="point"></div>
      </div>
      <Digit digit={seconds[0]} />
      <Digit digit={seconds[1]} />
      <Digit digit={centiSeconds[0]} decimal={true} />
      <Digit digit={centiSeconds[1]} decimal={true} />
    </div>
  );
}

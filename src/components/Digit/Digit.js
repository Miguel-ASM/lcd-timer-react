import "./Digit.scss";

export default function Digit({ digit }) {
  return (
    <div className={`display-digit display-digit-${digit}`}>
      <div className="display-digit-bar display-digit-bar-top"></div>
      <div className="display-digit-bar display-digit-bar-top-left"></div>
      <div className="display-digit-bar display-digit-bar-top-right"></div>
      <div className="display-digit-bar display-digit-bar-middle"></div>
      <div className="display-digit-bar display-digit-bar-bottom-left"></div>
      <div className="display-digit-bar display-digit-bar-bottom-right"></div>
      <div className="display-digit-bar display-digit-bar-bottom"></div>
    </div>
  );
}

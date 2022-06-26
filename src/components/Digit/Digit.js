import "./Digit.scss";

export default function Digit({ digit, decimal }) {
  return (
    <div
      className={
        `display-digit display-digit-${digit}` + (decimal ? " decimal" : "")
      }
    >
      <div
        className={
          "display-digit-bar display-digit-bar-top" +
          (decimal ? " decimal" : "")
        }
      ></div>
      <div
        className={
          "display-digit-bar display-digit-bar-top-left" +
          (decimal ? " decimal" : "")
        }
      ></div>
      <div
        className={
          "display-digit-bar display-digit-bar-top-right" +
          (decimal ? " decimal" : "")
        }
      ></div>
      <div
        className={
          "display-digit-bar display-digit-bar-middle" +
          (decimal ? " decimal" : "")
        }
      ></div>
      <div
        className={
          "display-digit-bar display-digit-bar-bottom-left" +
          (decimal ? " decimal" : "")
        }
      ></div>
      <div
        className={
          "display-digit-bar display-digit-bar-bottom-right" +
          (decimal ? " decimal" : "")
        }
      ></div>
      <div
        className={
          "display-digit-bar display-digit-bar-bottom" +
          (decimal ? " decimal" : "")
        }
      ></div>
    </div>
  );
}

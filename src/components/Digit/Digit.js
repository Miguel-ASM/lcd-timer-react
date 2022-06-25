import "./Digit.scss";

export default function Digit({digit}) {
  return (
    <div class={`display-digit display-digit-${digit}`}>
      <div class="display-digit-bar display-digit-bar-top"></div>
      <div class="display-digit-bar display-digit-bar-top-left"></div>
      <div class="display-digit-bar display-digit-bar-top-right"></div>
      <div class="display-digit-bar display-digit-bar-middle"></div>
      <div class="display-digit-bar display-digit-bar-bottom-left"></div>
      <div class="display-digit-bar display-digit-bar-bottom-right"></div>
      <div class="display-digit-bar display-digit-bar-bottom"></div>
    </div>
  );
}

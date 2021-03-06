export const centiSecondsToDisplayString = (centiSeconds) => {
  const centiSecondsPart = centiSeconds % 100;
  const seconds = (centiSeconds - centiSecondsPart) / 100;
  const secondsPart = seconds % 60;
  const minutesPart = (seconds - secondsPart) / 60;
  const addTrailingZero = (part) => (part < 10 ? "0" : "") + part;
  return `${addTrailingZero(minutesPart)}:${addTrailingZero(
    secondsPart
  )}.${addTrailingZero(centiSecondsPart)}`;
};

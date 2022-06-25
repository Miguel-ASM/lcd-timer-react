import "./App.scss";
import Display from "./components/Display/Display";
import { secondsToDisplayString } from "./helpers/helpers";

function App() {
  console.log(secondsToDisplayString(159));
  return (
    <div className="App">
      <Display digitsString={"10:00"} />
    </div>
  );
}

export default App;

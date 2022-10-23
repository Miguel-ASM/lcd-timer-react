import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useTimer } from "../../hooks/useTimer";

const { findByTestId, queryByTestId, getByTestId } = screen;

describe("useTimer", () => {
  const TestComponent = () => {
    const { centiSeconds, timerRunning, toggleIsRunnning, reset } = useTimer();
    return (
      <>
        <div data-testid="timer">{centiSeconds}</div>
        <button data-testid="start-pause-button" onClick={toggleIsRunnning}>
          START/PAUSE
        </button>
        <button data-testid="reset-button" onClick={reset}>
          RESET
        </button>
        {timerRunning && <p data-testid="isRunning"></p>}
      </>
    );
  };
  const getTime = async () =>
    parseInt((await findByTestId("timer")).textContent);
  const valueAfterTime = (miliseconds, getValue) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(getValue()), miliseconds)
    );
  };
  beforeEach(() => {
    render(<TestComponent />);
  });
  describe("when timer is NOT started", () => {
    it("time is initially 0", async () => {
      expect(await getTime()).toEqual(0);
    });
    it("time does not increase", async () => {
      const [t1, t2, t3] = await Promise.all(
        [100, 200, 300].map((t) => valueAfterTime(t, getTime))
      );
      expect([t1, t2, t3].every((t) => t === 0)).toBeTruthy();
    });
    it("the boolean timerRunning is false", async () => {
      expect(queryByTestId("isRunning")).not.toBeInTheDocument();
    });
  });
  describe("when timer IS started", () => {
    it("time increases", async () => {
      fireEvent.click(await findByTestId("start-pause-button"));
      const [t1, t2, t3] = await Promise.all(
        [100, 200, 300].map((t) => valueAfterTime(t, getTime))
      );
      expect(t1).toBeLessThan(t2);
      expect(t2).toBeLessThan(t3);
    });
    it("when timer is stopped time does not increase", async () => {
      //Click the button for activating the timer
      fireEvent.click(await findByTestId("start-pause-button"));
      //Wait some time before stopping it
      const t0 = await valueAfterTime(100, getTime);
      fireEvent.click(await findByTestId("start-pause-button"));
      const [t1, t2, t3] = await Promise.all(
        [100, 200, 300].map((t) => valueAfterTime(t, getTime))
      );
      expect(t0).toBeGreaterThan(0);
      expect([t1, t2, t3].every((t) => t >= t0)).toBeTruthy();
      expect(t1).toEqual(t2);
      expect(t2).toEqual(t3);
    });
    it("when timer is stopped and reseted time is always 0", async () => {
      //Click the button for activating the timer
      fireEvent.click(await findByTestId("start-pause-button"));
      //Wait some time before stopping it
      const t0 = await valueAfterTime(100, getTime);
      fireEvent.click(await findByTestId("start-pause-button"));
      fireEvent.click(await findByTestId("reset-button"));
      const [t1, t2, t3] = await Promise.all(
        [100, 200, 300].map((t) => valueAfterTime(t, getTime))
      );
      expect(t0).toBeGreaterThan(0);
      expect([t1, t2, t3].every((t) => t === 0)).toBeTruthy();
    });
    it("the boolean timerRunning is true/false if timer is running/paused", async () => {
      fireEvent.click(await findByTestId("start-pause-button"));
      await waitFor(() => {
        getByTestId("isRunning");
      });
      fireEvent.click(await findByTestId("start-pause-button"));
      await waitFor(() => {
        expect(queryByTestId("isRunning")).not.toBeInTheDocument();
      });
    });
  });
});

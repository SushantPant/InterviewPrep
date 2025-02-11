import React, { useEffect, useState } from "react";
import QrCode from "./QrCode";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  const [isOn, setIsOn] = useState(false);
  const [throttler, setThrottler] = useState(0);
  const handleNegativeCount = () => {
    setColor("red");
    setThrottler((prev) => prev + 1);
  };
  const handleThrottling = () => {
    setTimeout(() => {
      setThrottler((prev) => prev - 1);
    }, throttler * 1000);
  };
  useEffect(() => {
    let timer;
    if (isOn)
      timer = setInterval(() => {
        if (isOn) setCount((prev) => prev + 1);
        return;
      }, 1000);
    else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isOn]);

  useEffect(() => {
    setTimeout(() => {
      setColor("black");
    }, 2000);
  }, [color]);
  return (
    <div>
      <div style={{ color: color }}>{count}</div>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
          setColor("black");
        }}
      >
        Increase Count
      </button>
      <button onClick={() => setIsOn((prev) => !prev)}>
        {isOn ? "Stop Counting" : "Start Counting"}
      </button>
      <button
        disabled={throttler > 5}
        style={
          throttler > 3 && count < 1 ? { color: "white" } : { color: "black" }
        }
        onClick={() =>
          count > 0
            ? setCount(count - 1)
            : throttler < 5
            ? handleNegativeCount()
            : handleThrottling()
        }
      >
        Reduce Count
      </button>
      <QrCode count={String(count)}></QrCode>
    </div>
  );
};

export default Counter;

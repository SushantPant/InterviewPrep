import React, { useEffect, useMemo, useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [time, setTime] = useState(1000);
  const [value, setValue] = useState("relative");
  const [isClicking, setIsClicking] = useState(false);

  const position = useMemo(() => {
    if (count > 0) {
      return {
        top: Math.floor(Math.random() * 500),
        left: Math.floor(Math.random() * 500),
      };
    }
    return { top, left };
  }, [count]);

  useEffect(() => {
    if (!isClicking) {
      const timer = setTimeout(() => {
        setCount(0);
        setTime(1000);
        setValue("relative");
      }, time);

      return () => clearTimeout(timer);
    }
  }, [isClicking, time]);
  const handleClick = () => {
    setValue("absolute");
    setIsClicking(true);
    setCount((prev) => prev + 1);
    setTime((prev) => prev - 100);
    setTimeout(() => {
      setIsClicking(false);
    }, 0);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
          setCount(count + 1);
        }}
        style={{ position: value, top: position.top, left: position.left }}
      >
        {count > 0 ? `Button pressed ${count} times` : "Start"}
      </button>
    </div>
  );
};

export default Hook;

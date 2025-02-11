import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";

const QrCode = ({ count }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceValue(value);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);
  console.log(count);
  return (
    <div>
      <button onClick={() => setVisible(visible === true ? false : true)}>
        Visible
      </button>
      Label:{" "}
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {visible && (
        <QRCodeSVG value={debounceValue ? debounceValue : count}></QRCodeSVG>
      )}
    </div>
  );
};

export default QrCode;

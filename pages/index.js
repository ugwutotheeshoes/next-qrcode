import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const qrcodeRef = useRef(null);
  const [qrcode, setQrcode] = useState("");
  const handleChange = (event) => {
    setQrcode(event.target.value ? event.target.value : "");
  };
  return (
    <div className="App">
      <h1 className="title">Restaurant qr code Menu</h1>
      <input type="text" placeholder="type here" onChange={handleChange} />
      <QRCodeSVG
        value={qrcode}
        size="250"
        logoWidth="100"
        fgColor="#000"
        ref={qrcodeRef}
      />
    </div>
  );
}

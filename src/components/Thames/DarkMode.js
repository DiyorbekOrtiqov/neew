import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [rejim, setRejim] = useState("kun");

  useEffect(() => {
    if (rejim === "tungi") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [rejim]);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={rejim === "tungi"}
        onChange={() =>
          setRejim((prevRejim) => (prevRejim === "tungi" ? "kun" : "tungi"))
        }
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun alt="Day Mode" />
        <Moon alt="Night Mode" />
      </label>
      <button onClick={() => setRejim("tungi")}></button>
      <button onClick={() => setRejim("kun")}></button>
    </div>
  );
};

export default DarkMode;

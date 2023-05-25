import React, { useState } from "react";
import btnsound1 from "../sounds/btn1sound.wav";
import btnsound2 from "../sounds/btn2sound.wav";
import btnsound3 from "../sounds/btnsound3.wav";
import btn4sound from "../sounds/btn4sound.wav";
import btn5sound from "../sounds/btn5sound.wav";
import btn8sound from "../sounds/btn8sound.wav";
import btn9sound from "../sounds/btn9sound.wav";

const PhoneButtonSound = () => {
  const [buttonSounds] = useState([
    {
      name: "Button 1",
      sound: btnsound1,
      marginTop: "6em",
      marginLeft: "-8.5em",
    },
    {
      name: "Button 2",
      sound: btnsound2,
      marginTop: "9em",
      marginLeft: "-4em",
    },

    {
      name: "Button 3",
      sound: btnsound3,
      marginTop: "10.5em",
      marginLeft: "1em",
    },

    {
      name: "Button 4",
      sound: btn4sound,
      marginTop: "9em",
      marginLeft: "-9.5em",
    },

    {
      name: "Button 5",
      sound: btn5sound,
      marginTop: "12em",
      marginLeft: "-5em",
    },

    {
      name: "Button 6",
      sound: btnsound2,
      marginTop: "13.5em",
      marginLeft: "-.5em",
    },

    {
      name: "Button 7",
      sound: btnsound3,
      marginTop: "12em",
      marginLeft: "-10.5em",
    },

    {
      name: "Button 8",
      sound: btn8sound,
      marginTop: "14.5em",
      marginLeft: "-6.5em",
    },

    {
      name: "Button 9",
      sound: btn9sound,
      marginTop: "16.5em",
      marginLeft: "-1.5em",
    },

    {
      name: "Button 0",
      sound: btn4sound,
      marginTop: "17.5em",
      marginLeft: "-7.5em",
    },
  ]);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div>
      {buttonSounds.map((button) => (
        <button
          style={{ marginTop: button.marginTop, marginLeft: button.marginLeft }}
          className="overlay-button"
          key={button.name}
          onClick={() => playSound(button.sound)}
        ></button>
      ))}
    </div>
  );
};

export default PhoneButtonSound;

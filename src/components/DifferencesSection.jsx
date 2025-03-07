import Button from './Button/Button.jsx';
import { useState } from "react";
import {differences } from "../data";

export default function DifferencesSection() {
      const [contentType, setContentType] = useState(null);
    
      // const content = stateArray[0]
      // const setContent = stateArray[1 ]
      //let content = "нажми на кнопку";
      // console.log("App Component Render");
    
      function handleClick(type) {
        // console.log("button clicked", type);
        //content = type;
        setContentType(type);
      }
  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>

      <Button
        isActive={contentType == "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType == "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType == "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )} */}

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}

import React from "react";
import Fileds from "@/widgets/Fileds";
import { calculator, buttons, button } from "./style.css";

const Calculator = () => {
    const handleButtonClick = (value) => {
        console.log(value);
    };

    const buttonValues = [
        "C", "%", "()", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        ".", "0", "", "=",
    ];

    return (
        <div className={calculator}>
            <Fileds />
            <div className={buttons}>
                {buttonValues.map((value) => (
                    <button
                        key={value}
                        className={button}
                        onClick={() => handleButtonClick(value)}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;


import React, { useState, useEffect } from "react";

import { Mode } from "../../types";
import Emitter from "../../utils/Emitter";

import Input from "./Input";
import ProgrammingInput from "./ProgrammingInput";
import Output from "./Output";
import ProgrammingOutput from "./ProgrammingOutput";
import Graphing from "./Graphing";

const Calculator: React.FC = () => {
    const [mode, setMode] = useState<Mode>(Mode.GENERAL);

    const layoutSwitch = (calcMode: Mode) => {
        switch(calcMode) {
            case Mode.GENERAL:
                return (
                    <>
                        <Output/>
                        <Input/>
                    </>
                );
            case Mode.GRAPHING:
                return <Graphing/>;
            case Mode.PROGRAMMING:
                return (
                    <>
                        <ProgrammingOutput/>
                        <ProgrammingInput/>
                    </>
                );
        }
    };

    useEffect(() => {
        Emitter.get().on("switch-mode", (newMode: Mode) => {
            setMode(newMode);
        });
    });

    return (
        <div className="calculator-container" data-mode={mode}>
            {layoutSwitch(mode)}
        </div>
    );
}

export default Calculator;

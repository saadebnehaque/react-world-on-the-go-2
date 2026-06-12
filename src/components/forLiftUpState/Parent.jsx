import { useState } from "react";

import Display from "./Display";
import InputBox from "./Input";


const Parent = () => {
    const [text, setText] = useState('');

    return (
        <div>

            <InputBox text={text} setText={setText}></InputBox>
            <Display text={text}></Display>
        </div>
    );
};

export default Parent;
import { useState } from "react";

import Display from "./Display";
import InputBox from "./Input";


const Parent = () => {
    const [text, setText] = useState('');

    return (
        <>
            <div style={{background:'black',color:'white'}}>

                <InputBox text={text} setText={setText}></InputBox>
                <Display text={text}></Display>
            </div>
        </>
    );
};

export default Parent;
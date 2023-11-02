import React, { useState } from "react";

function Counter() {
    const [initialValue, setValue] = useState("0");

    const plusValue = function () {
        setValue(`${initialValue} + 1`);
    };

    return (
        <div
            style={{
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <p>{initialValue}</p>
            <button onclick={plusValue}>+ 1</button>
            <button>- 1</button>
        </div>
    );
}

export default Counter;

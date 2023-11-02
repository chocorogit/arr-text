import React, { useState } from "react";

function App() {
    const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
    const [array, setArray] = useState(initialState);
    const [result, setResult] = useState("");
    const [query, setQuery] = useState("");

    // foreach
    const handleForEach = function () {
        let temp = "";
        array.forEach(function (item, index) {
            temp += `${index} : ${item} / `;
        });

        setResult(temp);
    };

    // filter
    const handleFilter = function () {
        const filtered = array.filter((item, index) => item.includes(query));
        setResult(filtered.join(", "));
    };

    // map
    const handleMap = function () {
        const mapped = array.map(function (item, index) {
            return item.toUpperCase();
        });
        setResult(mapped.join(", "));
    };

    // reduce
    const handleReduce = () => {
        const reduced = array.reduce((acc, cur) => {
            console.log(acc);
            return `${acc} + ${cur}`;
        });
        console.log(reduced);
    };

    // push
    const handlePush = () => {
        if (query.length <= 0) {
            alert("추가하려는 값을 입력해주세요.");
            return false;
        }
        const newArr = [...array, query];
        setArray(newArr);
        setResult(newArr.join(", "));
    };

    // pop
    const handlePop = () => {
        // 1.원본 배열을 통해 pop한 값을 저장함(임시 변수에)
        const newArr = [...array];
        newArr.pop();

        // 2. setArray
        setArray(newArr);

        // 3. array를 기반으로 result 생성(setResult)
        setResult(newArr.join(", "));
    };

    // slice
    const handleSlice = () => {
        const slided = array.slice(query);
        setResult(slided.join(", "));
    };

    // splice
    const handleSplice = () => {
        const slided = array.splice(query);
        setResult(slided.join(", "));
    };

    // indexOf
    const handleIndex = () => {
        const index = array.indexOf(query);
        setResult(index);
    };

    // includes
    const handleIncludes = () => {
        const included = array.includes(query) ? true : false;
        setResult(`${included}`);
    };

    // find
    const handleFind = () => {
        const finded = array.find((item) => {
            return item.includes(query);
        });
        setResult(finded);
    };

    // some
    const handleSome = () => {
        const some = array.some((item) => {
            return item.includes(query);
        });
        setResult(`${some}`);
    };

    // every
    const handleEvery = () => {
        const every = array.every((item) => {
            // 하나라도 조건을 만족하지 않는 경우 --> false
            return item.length > query;
        });
        setResult(`${every}`);
    };

    // sort
    const handleSort = () => {
        const sorted = array.sort();
        setResult(sorted.join(", "));
    };

    // join
    const handleJoin = () => {
        const joined = array.join(` ${query} `);
        setResult(joined);
    };

    // 전체 스타일
    const outerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    // 인풋 스타일
    const inputStyle = {
        width: "50%",
        minWidth: "180px",
        height: "40px",
        marginBottom: "40px",
        fontSize: "18px",
    };
    // 버튼 스타일
    const buttonStyle = {
        padding: "8px",
        fontSize: "18px",
        margin: "0 8px 40px",
    };
    // 박스 스타일
    const boxStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: " 10px",
        width: "80%",
        margin: "20px",
        padding: " 0 20px",
        border: "1px solid #000",
        fontSize: "18px",
    };

    return (
        <div style={outerStyle}>
            <h1>Standard반 배열 API 테스트</h1>
            <input
                style={inputStyle}
                value={query}
                onChange={function (e) {
                    setQuery(e.target.value);
                }}
            />
            <div>
                <button style={buttonStyle} onClick={handleForEach}>
                    forEach
                </button>
                <button style={buttonStyle} onClick={handleFilter}>
                    filter
                </button>
                <button style={buttonStyle} onClick={handleMap}>
                    map
                </button>
                <button style={buttonStyle} onClick={handleReduce}>
                    reduce
                </button>
                <button style={buttonStyle} onClick={handlePush}>
                    push
                </button>
                <button style={buttonStyle} onClick={handlePop}>
                    pop
                </button>
                {/* 숙제 */}
                <button style={buttonStyle} onClick={handleSlice}>
                    slice
                </button>
                <button style={buttonStyle} onClick={handleSplice}>
                    splice
                </button>
                <button style={buttonStyle} onClick={handleIndex}>
                    indexOf
                </button>
                <button style={buttonStyle} onClick={handleIncludes}>
                    includes
                </button>
                <button style={buttonStyle} onClick={handleFind}>
                    find
                </button>
                <button style={buttonStyle} onClick={handleSome}>
                    some
                </button>
                <button style={buttonStyle} onClick={handleEvery}>
                    every
                </button>
                <button style={buttonStyle} onClick={handleSort}>
                    sort
                </button>
                <button style={buttonStyle} onClick={handleJoin}>
                    join
                </button>
            </div>
            <div style={boxStyle}>
                <h3>원본배열</h3>
                <p>{array.join(", ")}</p>
            </div>
            <div style={boxStyle}>
                <h3>결과물</h3>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default App;

import React, { useState } from "react";

{/* useState 사용하기 */ }
function Counter() {
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number, setNumber] = useState(0);  // 위 코드와 동일
    // number: 현재 상태, setNumber: Setter 함수

    const onIncrease = () => {  // on이벤트이름={실행할함수} 형태로 작성. 이벤트를 설정할 때에는 함수타입의 값만 넣어줘야함!!
        // setNumber(number + 1)  // 새로운 값을 넣어줌
        setNumber(prevNumber => prevNumber + 1)  // 기존 값을 업데이트 해줌
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
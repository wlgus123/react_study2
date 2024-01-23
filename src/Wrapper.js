import React from "react";

// props.children: 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 때 조회
function Wrapper({ children }) {  // 내부의 내용이 보여지게 하기 위해서는 child을 랜더링해주어야 함
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;
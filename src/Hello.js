import React from "react";

function Hello({ color, name, isSpecial }) { // 더 간단하게 작성할 수 있음
    return (
        <div style={{ color }}>
            {/* 조건부 렌더링 */}
            {/* {  // 1. 가장 기본적인 삼항연산자를 사용한 isSpecial처리
                isSpecial ? <b>*</b> : null } */}

            {  // 2. && 연산자를 사용한 isSpecial처리 (더 간편함)
                isSpecial && <b>*</b> }
            Hello, {name}
        </div>
    );
}

// defaultProps: 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정할 때 사용
Hello.defaultProps = {
    name: '이름없음'
}  // Hello 호출 시 name을 적지 않을 때 나타남

export default Hello;
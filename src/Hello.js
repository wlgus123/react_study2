import React from "react";

// function Hello(props) {
//     return (
//         <>
//             <div>Hello, {props.name}</div>
//             <div style={{color: props.color}}>Hello!!!</div>
//         </>
//     )
// }

function Hello({color, name}) { // 더 간단하게 작성할 수 있음
    return (
        <div style={{color}}>Hello, {name}</div>
    )
}

// defaultProps: 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정할 때 사용
Hello.defaultProps = {
    name: '이름없음'
}  // Hello를 호출할 때 name을 적지 않을 때 나타남

export default Hello;
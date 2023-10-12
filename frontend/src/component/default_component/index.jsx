// ㅜ rafce 명령어로 컴포넌트 생성
import React from 'react';
import { Button_1, MAROON_COLOR_1, BEIGE_COLOR_1 } from "../../baseStyle";

const Default_component = () => {
    return (
        <div style={{ width: "100%", padding: "5vw 0", backgroundColor: BEIGE_COLOR_1 }}>
            <h1 style={{ color: MAROON_COLOR_1 }}>Default_component</h1>
            <h6 style={{ color: MAROON_COLOR_1 }}>언제든 도움 요청하고 서로 도와주자!</h6>
            <Button_1>도움 요청!</Button_1>
        </div>
    )
}

export default Default_component;

// ㅜ 메타마스트 확장 프로그램 사용 시 2가지 에러 발생함
// Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function
// lockdown-more.js:99 Protecting intrinsics failed: ReferenceError: harden is not defined
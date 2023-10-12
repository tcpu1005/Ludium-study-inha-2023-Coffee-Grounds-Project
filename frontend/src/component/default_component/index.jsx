// ㅜ rafce 명령어로 컴포넌트 생성
import React from 'react';
import { Button_1, MAROON_COLOR_1, BEIGE_COLOR_1 } from "../../base_style";

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
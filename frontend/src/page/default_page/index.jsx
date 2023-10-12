// ㅜ rafce 명령어로 컴포넌트 생성
import React from 'react';
import Default_component from "../../component/default_component";
import { Button_1, MAROON_COLOR_1, WHITE_COLOR_1 } from "../../base_style";

const Default_page = () => {
    return (
        <>
            <div style={{ width: "100%", padding: "5vw 0", backgroundColor: WHITE_COLOR_1 }}>
                <h1 style={{ color: MAROON_COLOR_1 }}>Default_page</h1>
                <h1 style={{ color: MAROON_COLOR_1 }}>h1 style</h1>
                <h2 style={{ color: MAROON_COLOR_1 }}>h2 style</h2>
                <h3 style={{ color: MAROON_COLOR_1 }}>h3 style</h3>
                <h4 style={{ color: MAROON_COLOR_1 }}>h4 style</h4>
                <h5 style={{ color: MAROON_COLOR_1 }}>h5 style</h5>
                <h6 style={{ color: MAROON_COLOR_1 }}>h6 style</h6>
                <Button_1>버튼1 style</Button_1>
            </div>
            <Default_component />
        </>
    )
}

export default Default_page;

// ㅜ 메타마스트 확장 프로그램 사용 시 2가지 에러 발생함
// Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function
// lockdown-more.js:99 Protecting intrinsics failed: ReferenceError: harden is not defined
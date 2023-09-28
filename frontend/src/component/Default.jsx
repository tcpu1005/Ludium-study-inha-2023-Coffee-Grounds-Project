// ㅜ rafce 명령어로 컴포넌트 생성
import React from 'react';

const Default = () => {
    return (
        <div>Default</div>
    )
}

export default Default;

// ㅜ 메타마스트 확장 프로그램 사용 시 2가지 에러 발생함
// Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function
// lockdown-more.js:99 Protecting intrinsics failed: ReferenceError: harden is not defined
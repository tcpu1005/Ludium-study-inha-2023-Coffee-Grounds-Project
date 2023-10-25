// 리듀서 초기 값
const init = {
    //

    // 리덕스 DB에 저장된 상태 값 
    team_message: "재민 지훈 희진 지원!"
}


function reducer(state = init, action) {
    //

    const { type, payload } = action;


    // 액션명은 대문자 스네이크 타입으로 정의
    switch (type) {
        //

        case "WE_CAN_DO_IT":
            //
            // 리렌더링을 위해 스프레드 연산자 사용
            return { ...state, team_message: payload.team_message };


        case "":
            //
            return { ...state, };


        case "":
            //
            return { ...state, };


        default:
            return state;
    }
}


export default reducer;
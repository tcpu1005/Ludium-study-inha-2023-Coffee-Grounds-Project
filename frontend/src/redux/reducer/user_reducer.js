// ㅜ 리듀서 초기 값
const init = {
  cafe_id: null,
  is_login: false,
  user_name: null,
  user_type: null,
  cafe_name: null,
  address_si: null,
  address_gu: null,
  address_dong: null,
  company_name: null,
  wallet_address: null,
};

function user_reducer(state = init, action) {
  //

  const { type, payload } = action;

  // ㅜ 액션명은 대문자 스네이크 타입으로 정의
  switch (type) {
    //

    case "LOGIN_USER":
      // ㅜ 리렌더링을 위해 스프레드 연산자 사용
      //   console.log(payload);
      return { ...state, is_login: true, ...payload };

    case "LOGIN_COLLECTOR":
      //
      return { ...state, is_login: true, ...payload };

    case "LOGOUT":
      //
      return { ...init };

    default:
      return state;
  }
}

export default user_reducer;

// ㅜ 리듀서 초기 값
const init = {
  user_name: null,
  user_type: null,
  wallet_address: null,
  cafe_id: null,
  cafe_name: null,
  address_si: null,
  address_gu: null,
  address_dong: null,
  company_name: null,
};

function reducer(state = init, action) {
  //

  const { type, payload } = action;

  // ㅜ 액션명은 대문자 스네이크 타입으로 정의
  switch (type) {
    //

    case "LOGIN_USER_SUCCESS":
      // ㅜ 리렌더링을 위해 스프레드 연산자 사용
      //   console.log(payload);
      return {
        ...state,
        user_name: payload.login_info.user_name,
        user_type: payload.login_info.user_type,
        wallet_address: payload.login_info.wallet_address,
        cafe_id: payload.login_info.cafe_id,
        cafe_name: payload.login_info.cafe_name,
        address_si: payload.login_info.address_si,
        address_gu: payload.login_info.address_gu,
        address_dong: payload.login_info.address_dong,
      };

    case "LOGIN_COMPANY_SUCCESS":
      //
      return {
        ...state,
        user_name: payload.login_info.user_name,
        user_type: payload.login_info.user_type,
        wallet_address: payload.login_info.wallet_address,
        company_name: payload.login_info.company_name,
      };

    case "":
      //
      return { ...state };

    default:
      return state;
  }
}

export default reducer;

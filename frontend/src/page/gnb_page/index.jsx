import { useDispatch, useSelector } from "react-redux";
import { logout_user_fn } from "../../redux/middleware";
import { useNavigate } from "react-router-dom";
import { Button_4 } from "../../base_style";


const Gnb_page = () => {
  //

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user_reducer.is_login);
  const user_type = useSelector((state) => state.user_reducer.user_type);


  // 카페 사장님만 접근 가능한 페이지에 함수 사용하기
  const only_cafe_page_fn = (path) => {
    if (user_type !== "Cafe") {
      alert("카페 사장님만 접근 가능한 페이지입니다.");
      return;
    }
    nav(path);
  }


  // 수거 작업자만 접근 가능한 페이지에 함수 사용하기
  const only_collector_page_fn = (path) => {
    if (user_type !== "Collector") {
      alert("수거 작업자만 접근 가능한 페이지입니다.");
      return;
    }
    nav(path);
  }


  const all_user_page_fn = (path) => {
    nav(path);
  }


  const logout_button_fn = () => {
    dispatch(logout_user_fn());
  }


  const nav = useNavigate();
  return (
    <>
      {/* 1_MAIN */}
      <Button_4 onClick={() => all_user_page_fn("/")}>메인 페이지로 이동하기</Button_4>


      {/* 2_JOIN_CHOICE */}
      {!is_login &&
        <Button_4 onClick={() => nav("/join/choice")}>회원 가입하기</Button_4>
      }


      {/* 3_JOIN_CAFE */}
      {!is_login &&
        <Button_4 onClick={() => nav("/join/cafe")}>카페 가입하기(개발 전용)</Button_4>
      }


      {/* 4_JOIN_COLLECTOR */}
      {!is_login &&
        <Button_4 onClick={() => nav("/join/collector")}>수거업체 가입하기(개발 전용)</Button_4>
      }

      {/* 5_LOGIN */}
      {!is_login &&
        <Button_4 onClick={() => nav("/login")}>로그인하기</Button_4>
      }


      {is_login &&
        <Button_4 onClick={logout_button_fn}>로그아웃하기</Button_4>
      }


      {/* 6_MY_PAGE_CAFE_COFFEE */}
      <Button_4 onClick={() => only_cafe_page_fn("/emission")}>나의 배출 목록 및 배출하기</Button_4>


      {/* 7_MY_PAGE_CAFE_COFFEE_INPUT */}
      <Button_4 onClick={() => only_cafe_page_fn("/emission/input")}>배출 입력하기(개발 전용)</Button_4>


      {/* 8_MY_PAGE_CAFE_INSENTIVE */}
      <Button_4 onClick={() => only_cafe_page_fn("/insentive")}>나의 인센티브 확인하기</Button_4>


      {/* 9_MY_PAGE_CAFE_TOKEN */}
      <Button_4 onClick={() => only_cafe_page_fn("/insentive/token")}>나의 토큰 확인하기(+)</Button_4>


      {/* 10_MY_PAGE_CAFE_TOKEN_EXCHANGE */}
      <Button_4 onClick={() => only_cafe_page_fn("/insentive/token/exchange")}>토큰 환전하기(+)</Button_4>


      {/* 11_MY_PAGE_COLLECTOR */}
      {/* 모든 수거 요청 목록 조회 + 수거자만 수거하기 버튼 접근 가능 */}
      <Button_4 onClick={() => all_user_page_fn("/collection")}>수거 요청 목록 확인하기(+)</Button_4>


      {/* 12_MY_PAGE_COLLECTOR_INPUT */}
      <Button_4 onClick={() => only_collector_page_fn("/collection/input")}>수거 입력하기(개발 전용)</Button_4>


      {/* 13_MY_PAGE_COLLECTOR_CHECK */}
      {/* 나의 수거 완료 목록 조회 + 수정하기 버튼 (준비중) + 검증 완료 버튼 (해당 페이지 수거자만 접근 가능) */}
      <Button_4 onClick={() => only_collector_page_fn("/collection/check")}>나의 수거 목록 확인하기(+)</Button_4>


      {/* 14_COLLECTION_ONCHAIN */}
      {/* 모든 보상 완료 목록 확인하기 (오라클 문제, 검증자 역할의 수거자에게 책임감을 강화시키기 위한 페이지) */}
      <Button_4 onClick={() => all_user_page_fn("/collection/onchain")}>보상 완료 목록 확인하기(+)</Button_4>
    </>
  )
}


export default Gnb_page;

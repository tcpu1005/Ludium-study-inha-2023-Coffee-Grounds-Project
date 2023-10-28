import { useDispatch, useSelector } from "react-redux";
import { logout_user_fn } from "../../redux/middleware";
import { useNavigate } from "react-router-dom";
import { Button_4 } from "../../base_style";
import {Main_button, Join_button, Login_button,Emission_button, Incentive_button, Token_button, Changetoken_button, Requestcheck_button,
Myemission_button, Complete_button, Total}
from "./style";


const Gnb_page = () => {
  //

  const nav = useNavigate();
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


  const only_logined_page_fn = (path, who) => {
    if (!is_login) {
      alert("로그인 후 이용해주세요!");
      return;
    }
    if (who === "Cafe") {
      only_cafe_page_fn(path);
    }
    else if (who === "Collector") {
      only_collector_page_fn(path);
    }
  }


  const logout_button_fn = () => {
    dispatch(logout_user_fn());
  }




  return (
    <>
    <Total>
      {/* 1_MAIN */}
      <Main_button onClick={() => all_user_page_fn("/")}>메인 페이지로 이동하기</Main_button>


      {/* 2_JOIN_CHOICE */}
      {!is_login &&
        <Join_button onClick={() => nav("/join/choice")}>회원 가입하기</Join_button>
      }


      {/* 3_JOIN_CAFE */}
      {/* {!is_login &&
        <Button_4 onClick={() => nav("/join/cafe")}>카페 가입하기(개발 전용)</Button_4>
      } */}


      {/* 4_JOIN_COLLECTOR */}
      {/* {!is_login &&
        <Button_4 onClick={() => nav("/join/collector")}>수거업체 가입하기(개발 전용)</Button_4>
      } */}

      {/* 5_LOGIN */}
      {!is_login &&
        <Login_button onClick={() => nav("/login")}>로그인하기</Login_button>
      }


      {is_login &&
        <Button_4 onClick={logout_button_fn}>로그아웃하기</Button_4>
      }


      {/* 6_MY_PAGE_CAFE_COFFEE */}
      <Emission_button onClick={() => only_logined_page_fn("/emission", "Cafe")}>나의 배출 목록 및 배출하기</Emission_button>


      {/* 7_MY_PAGE_CAFE_COFFEE_INPUT */}
      {/* <Button_4 onClick={() => only_logined_page_fn("/emission/input", "Cafe")}>배출 입력하기(개발 전용)</Button_4> */}


      {/* 8_MY_PAGE_CAFE_INSENTIVE */}
      <Incentive_button onClick={() => only_logined_page_fn("/insentive", "Cafe")}>나의 인센티브 확인하기</Incentive_button>


      {/* 9_MY_PAGE_CAFE_TOKEN */}
      <Token_button onClick={() => only_logined_page_fn("/insentive/token", "Cafe")}>나의 토큰 확인하기</Token_button>


      {/* 10_MY_PAGE_CAFE_TOKEN_EXCHANGE */}
      <Changetoken_button onClick={() => only_logined_page_fn("/insentive/token/exchange", "Cafe")}>토큰 환전하기</Changetoken_button>


      {/* 11_MY_PAGE_COLLECTOR */}
      {/* 모든 수거 요청 목록 조회 + 수거자만 수거하기 버튼 접근 가능 */}
      <Requestcheck_button onClick={() => all_user_page_fn("/collection")}>수거 요청 목록 확인하기</Requestcheck_button>


      {/* 12_MY_PAGE_COLLECTOR_INPUT */}
      {/* <Button_4 onClick={() => only_logined_page_fn("/collection/input", "Collector")}>수거 입력하기(개발 전용)</Button_4> */}


      {/* 13_MY_PAGE_COLLECTOR_CHECK */}
      {/* 나의 수거 완료 목록 조회 + 수정하기 버튼 (준비중) + 검증 완료 버튼 (해당 페이지 수거자만 접근 가능) */}
      <Myemission_button onClick={() => only_logined_page_fn("/collection/check", "Collector")}>나의 수거 목록 확인하기</Myemission_button>


      {/* 14_COLLECTION_ONCHAIN */}
      {/* 모든 보상 완료 목록 확인하기 (오라클 문제, 검증자 역할의 수거자에게 책임감을 강화시키기 위한 페이지) */}
      <Complete_button onClick={() => all_user_page_fn("/collection/onchain")}>보상 완료 목록 확인하기</Complete_button>
    </Total>
    </>
  )
}


export default Gnb_page;

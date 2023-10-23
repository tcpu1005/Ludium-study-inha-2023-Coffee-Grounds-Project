import { useNavigate } from "react-router-dom";
import { Button_4 } from "../../base_style";


const Gnb_page_temp = () => {
  //

  const nav = useNavigate();
  return (
    <>
      {/* 1_MAIN */}
      <Button_4 onClick={() => nav("/")}>메인 페이지로 이동하기</Button_4>
      {/* 2_JOIN_CHOICE */}
      <Button_4 onClick={() => nav("/join/choice")}>회원 가입하기</Button_4>
      {/* 3_JOIN_CAFE */}
      <Button_4 onClick={() => nav("/join/cafe")}>카페 가입하기(삭제 예정)</Button_4>
      {/* 4_JOIN_COLLECTOR */}
      <Button_4 onClick={() => nav("/join/collector")}>수거업체 가입하기(삭제 예정)</Button_4>
      {/* 5_LOGIN */}
      <Button_4 onClick={() => nav("/login")}>로그인하기</Button_4>
      {/* 6_MY_PAGE_CAFE_COFFEE */}
      <Button_4 onClick={() => nav("/emission")}>나의 배출 목록 및 배출하기</Button_4>
      {/* 7_MY_PAGE_CAFE_COFFEE_INPUT */}
      <Button_4 onClick={() => nav("/emission/input")}>배출 입력하기(삭제 예정)</Button_4>
      {/* 8_MY_PAGE_CAFE_INSENTIVE */}
      <Button_4 onClick={() => nav("/insentive")}>나의 인센티브 확인하기</Button_4>
      {/* 9_MY_PAGE_CAFE_TOKEN */}
      <Button_4 onClick={() => nav("/insentive/token")}>나의 토큰 확인하기</Button_4>
      {/* 10_MY_PAGE_CAFE_TOKEN_EXCHANGE */}
      <Button_4 onClick={() => nav("/insentive/token/exchange")}>토큰 환전하기</Button_4>
      {/* 11_MY_PAGE_COLLECTOR */}
      <Button_4 onClick={() => nav("/collection")}>현재 수거 요청 목록 확인하기</Button_4>
      {/* 12_MY_PAGE_COLLECTOR_INPUT */}
      <Button_4 onClick={() => nav("/collection/input")}>수거 입력하기(삭제 예정)</Button_4>
    </>
  )
}


export default Gnb_page_temp;
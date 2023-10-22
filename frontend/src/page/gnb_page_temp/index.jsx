import { useNavigate } from "react-router-dom";
import { Button_4 } from "../../base_style";


const Gnb_page_temp = () => {
  //

  const nav = useNavigate();
  return (
    <>
      <Button_4 onClick={() => nav("/")}>4_MAIN</Button_4>
      <Button_4 onClick={() => nav("/join/choice")}>2_JOIN_CHOICE</Button_4>
      <Button_4 onClick={() => nav("/join/cafe")}>3_JOIN_CAFE</Button_4>
      <Button_4 onClick={() => nav("/join/collector")}>4_JOIN_COLLECTOR</Button_4>
      <Button_4 onClick={() => nav("/login")}>5_LOGIN</Button_4>
      <Button_4 onClick={() => nav("/emission")}>6_MY_PAGE_CAFE_COFFEE</Button_4>
      <Button_4 onClick={() => nav("/emission/input")}>7_MY_PAGE_CAFE_COFFEE_INPUT</Button_4>
      <Button_4 onClick={() => nav("/insentive")}>8_MY_PAGE_CAFE_INSENTIVE</Button_4>
      <Button_4 onClick={() => nav("/insentive/token")}>9_MY_PAGE_CAFE_TOKEN</Button_4>
      <Button_4 onClick={() => nav("/insentive/token/exchange")}>40_MY_PAGE_CAFE_TOKEN_EXCHANGE</Button_4>
      <Button_4 onClick={() => nav("/collection")}>44_MY_PAGE_COLLECTOR</Button_4>
      <Button_4 onClick={() => nav("/collection/input")}>42_MY_PAGE_COLLECTOR_INPUT</Button_4>
    </>
  )
}


export default Gnb_page_temp;
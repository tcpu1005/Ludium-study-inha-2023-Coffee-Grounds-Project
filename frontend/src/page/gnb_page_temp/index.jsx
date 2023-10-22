import { useNavigate } from "react-router-dom";
import { Button_1 } from "../../base_style";


const Gnb_page_temp = () => {
  //

  const nav = useNavigate();
  return (
    <>
      <Button_1 onClick={() => nav("/")}>1_MAIN</Button_1>
      <Button_1 onClick={() => nav("/join/choice")}>2_JOIN_CHOICE</Button_1>
      <Button_1 onClick={() => nav("/join/cafe")}>3_JOIN_CAFE</Button_1>
      <Button_1 onClick={() => nav("/join/collector")}>4_JOIN_COLLECTOR</Button_1>
      <Button_1 onClick={() => nav("/login")}>5_LOGIN</Button_1>
      <Button_1 onClick={() => nav("/emission")}>6_MY_PAGE_CAFE_COFFEE</Button_1>
      <Button_1 onClick={() => nav("/emission/input")}>7_MY_PAGE_CAFE_COFFEE_INPUT</Button_1>
      <Button_1 onClick={() => nav("/insentive")}>8_MY_PAGE_CAFE_INSENTIVE</Button_1>
      <Button_1 onClick={() => nav("/insentive/token")}>9_MY_PAGE_CAFE_TOKEN</Button_1>
      <Button_1 onClick={() => nav("/insentive/token/exchange")}>10_MY_PAGE_CAFE_TOKEN_EXCHANGE</Button_1>
      <Button_1 onClick={() => nav("/collection")}>11_MY_PAGE_COLLECTOR</Button_1>
      <Button_1 onClick={() => nav("/collection/input")}>12_MY_PAGE_COLLECTOR_INPUT</Button_1>
    </>
  )
}


export default Gnb_page_temp;
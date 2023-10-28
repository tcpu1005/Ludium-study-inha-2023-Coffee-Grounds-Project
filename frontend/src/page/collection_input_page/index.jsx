// 12_MY_PAGE_COLLECTOR_INPUT

import {
  StyledContainer, StyledInputContainer, StyledLabel, StyledInput, Coffee_Status, Coffee_Statuscon, Coffee_weight, Coffee_weightcon, Coffee_date, Cha_month, KG
} from "./style";
import Big_title_component from "../../component/big_title_component";
import { resigter_collection_fn } from "../../redux/middleware";
import { useLocation, useNavigate } from "react-router";
import { Button_9 } from "../../base_style";
import { useSelector } from "react-redux";
import { useRef } from "react";


const Collection_input_page = () => {
  //

  const nav = useNavigate();
  const location = useLocation();
  const company_name = useSelector((state) => state.user_reducer.company_name);
  const is_login = useSelector((state) => state.user_reducer.is_login);


  // 수거 목록 페이지에서 선택한 수거 목록의 데이터가 여기에 들어있다.
  // 개발 단계에서 이 페이지로 바로 접속 시 발생하는 에러를 잡기 위해 ?로 예외 처리해주었다.
  const collection_choice_data = location.state?.collection_choice_data;
  // const collection_choice_data = { coffee_status: "습기", coffee_amount: 100 };


  const get_coffee_status_value_fn = (value) => {
    switch (value) {
      case "건조":
        return "drying";
      case "습기":
        return "moisture";
      case "곰팡이":
        return "mold";
      default:
        return "etc";
    }
  };


  const coffee_status_value = get_coffee_status_value_fn(
    collection_choice_data?.coffee_status
  );
  const coffee_record_id = collection_choice_data?.record_id;
  const cafe_id = collection_choice_data?.cafe_id;
  const coffee_amount_value = collection_choice_data?.coffee_amount;


  const coffee_status_ref = useRef();
  const coffee_amount_ref = useRef();
  const collection_date_ref = useRef();


  if (!is_login) {
    alert("로그인부터 해주세요!");
    nav("/login");
    return;
  }


  const collection_button_fn = (e) => {
    //

    const coffee_status = coffee_status_ref.current.value;
    const coffee_amount = Number(coffee_amount_ref.current.value);
    const collection_date = Date(collection_date_ref.current.value);


    const update_collection_data = {
      record_id: coffee_record_id,
      company_name,
      cafe_id,
      coffee_amount,
      coffee_status,
      collection_date,
    };


    // input 비었을 때 예외 처리
    // Date(collection_date_ref.current.value)
    // => 아무 것도 입력 안할 경우 현재 시간의 Date 객체가 생성되어 예외 처리는 collection_date_ref.current.value === ""으로 해줘야 함
    if (
      !company_name ||
      !coffee_status ||
      !coffee_amount ||
      !collection_date_ref.current.value
    ) {
      alert("값을 입력해주세요.");
      return;
    }


    // 커피박 양 과도하게 입력하지 못하도록 예외 처리
    if (coffee_amount > 1000) {
      alert("입력된 커피박 양이 과도합니다.");
      return;
    }


    // 커피박 양 과도하게 입력하지 못하도록 예외 처리
    if (isNaN(coffee_amount) || coffee_amount <= 0) {
      alert("입력된 커피박 양이 올바르지 못합니다.");
      return;
    }


    resigter_collection_fn(update_collection_data);
  };


  return (
    <StyledContainer>
      <Big_title_component title="수거 데이터 입력" />


      <StyledInputContainer>
        <StyledLabel htmlFor="cafe_name">카페명</StyledLabel>
        <StyledInput id="cafe_name" value={company_name} disabled autoComplete="off" />
      </StyledInputContainer>


      <StyledInputContainer>
        <Coffee_Status htmlFor="coffee_status">커피박 상태</Coffee_Status>
        <Coffee_Statuscon name="" id="" ref={coffee_status_ref} defaultValue={coffee_status_value}>
          <option value="drying">건조</option>
          <option value="moisture">습기</option>
          <option value="mold">곰팡이</option>
          <option value="impossible">수거 불가</option>
        </Coffee_Statuscon>
      </StyledInputContainer>


      <StyledInputContainer>
        <Coffee_weight htmlFor="coffee_amount" >커피박 양</Coffee_weight>
        <Coffee_weightcon id="coffee_amount" ref={coffee_amount_ref} defaultValue={coffee_amount_value} autoComplete="off" />
        <KG htmlFor="coffee_amount" >kg</KG>
      </StyledInputContainer>


      <StyledInputContainer>
        <Coffee_date htmlFor="collection_date" >수거날짜</Coffee_date>
        <Cha_month id="collection_date" type={"date"} ref={collection_date_ref} />
      </StyledInputContainer>


      <Button_9 onClick={collection_button_fn}>데이터 입력</Button_9>
    </StyledContainer>
  )
}


export default Collection_input_page;

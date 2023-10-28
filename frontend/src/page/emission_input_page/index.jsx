// 7_MY_PAGE_CAFE_COFFEE_INPUT


import { Entire_container, DivContainer, LabelDiv, InputDiv } from "./style";
import Big_title_component from "../../component/big_title_component";
import { register_emission_fn } from "../../redux/middleware";
import { Button_2 } from "../../base_style";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useRef } from "react";


const Emission_input_page = () => {
  //

  const nav = useNavigate();
  const coffee_status_ref = useRef();
  const coffee_amount_ref = useRef();
  const cafe_id = useSelector((state) => state.user_reducer.cafe_id);
  const is_login = useSelector((state) => state.user_reducer.is_login);
  const cafe_name = useSelector((state) => state.user_reducer.cafe_name);


  if (!is_login) {
    alert("로그인부터 해주세요!");
    nav("/login");
    return;
  }


  const emission_button_fn = async (e) => {
    //

    const coffee_status = coffee_status_ref.current.value;
    const coffee_amount = Number(coffee_amount_ref.current.value);


    // input 비었을 때 예외 처리
    if (!cafe_name || !coffee_status || !coffee_amount) {
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


    const cafe_emission_data = {
      coffee_amount,
      coffee_status,
      cafe_name,
      cafe_id,
    };


    const { success, message } = await register_emission_fn(cafe_emission_data);
    alert(message);


    if (success) {
      nav("/emission");
    }
  };


  return (
    <>
      <Big_title_component title="배출 데이터 입력" />
      <Entire_container>
        <DivContainer>
          <LabelDiv>
            <label htmlFor="cafe_name" style={{ fontSize: "60%" }}>
              카페명
            </label>
            <input
              style={{ fontSize: "60%" }}
              id="cafe_name"
              value={cafe_name || "카페인 중독"}
              disabled
              autoComplete="off"
            />
          </LabelDiv>


          <InputDiv>
            <legend htmlFor="coffee_status" style={{ fontSize: "60%" }}>
              커피박 상태
            </legend>
            <select
              name=""
              id=""
              ref={coffee_status_ref}
              defaultValue={"moisture"}
              style={{ fontSize: "60%" }}
            >
              <option value="drying">건조</option>
              <option value="moisture">습기</option>
              <option value="mold">곰팡이</option>
            </select>
          </InputDiv>


          <InputDiv>
            <label htmlFor="coffee_amount" style={{ fontSize: "60%" }}>
              커피박 양 (단위 : kg)
            </label>
            <input
              id="coffee_amount"
              ref={coffee_amount_ref}
              autoComplete="off"
              style={{ fontSize: "60%" }}
            />
          </InputDiv>


          <Button_2 onClick={emission_button_fn} style={{ fontSize: "60%" }}>
            데이터 입력
          </Button_2>
        </DivContainer>
      </Entire_container>
    </>
  );
};


export default Emission_input_page;

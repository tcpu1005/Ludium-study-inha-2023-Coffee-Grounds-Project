// 12_MY_PAGE_COLLECTOR_INPUT

import {
  StyledContainer,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledButton,
} from "./style";
import Big_title_component from "../../component/big_title_component";
import { Button_2 } from "../../base_style";
import { useLocation } from "react-router";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import user_reducer from "../../redux/reducer";
import { update_collection } from "../../redux/middleware";
const Collection_input_page = () => {
  //

  const location = useLocation();
  const company_name = useSelector((state) => state.user_reducer.company_name);

  // 수거 목록 페이지에서 선택한 수거 목록의 데이터가 여기에 들어있다.
  const { collection_choice_data } = location.state;
  // const collection_choice_data = { coffee_status: "습기", coffee_amount: 100 };
  console.log(collection_choice_data);
  console.log(company_name);
  // 수거업체명은 리덕스에서 가져올 예정

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
    collection_choice_data.coffee_status
  );
  const coffee_record_id = collection_choice_data.record_id;
  const cafe_id = collection_choice_data.cafe_id;
  const coffee_amount_value = collection_choice_data.coffee_amount;

  const coffee_status_ref = useRef();
  const coffee_amount_ref = useRef();
  const collection_date_ref = useRef();

  const collection_button_fn = (e) => {
    //const

    const coffee_status = coffee_status_ref.current.value;
    const coffee_amount = Number(coffee_amount_ref.current.value);
    const collection_date = Date(collection_date_ref.current.value);
    console.log(coffee_record_id);
    console.log(company_name);
    console.log(coffee_status);
    console.log(coffee_amount);
    console.log(collection_date);
    const update_collection_data = {
      record_id: coffee_record_id,
      company_name: company_name,
      cafe_id: cafe_id,
      coffee_amount: coffee_amount,
      coffee_status: coffee_status,
      collection_date: collection_date,
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
    console.log(update_collection_data);
    update_collection(update_collection_data);
    // 여기서 디스패치 날리면 됩니다.
  };

  return (
    <StyledContainer>
      <Big_title_component title="수거 데이터 입력" />

      <StyledInputContainer>
        <StyledLabel htmlFor="company_name">수거업체명</StyledLabel>
        <StyledInput
          id="company_name"
          value={company_name}
          disabled
          autoComplete="off"
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor="coffee_status" style={{ fontSize: "60%" }}>
          커피박 상태
        </StyledLabel>
        <StyledSelect
          name=""
          id=""
          ref={coffee_status_ref}
          defaultValue={coffee_status_value}
        >
          <option value="drying">건조</option>
          <option value="moisture">습기</option>
          <option value="mold">곰팡이</option>
          <option value="impossible">수거 불가</option>
        </StyledSelect>
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor="coffee_amount" style={{ fontSize: "60%" }}>
          커피박 양 (기준 : kg)
        </StyledLabel>
        <StyledInput
          id="coffee_amount"
          ref={coffee_amount_ref}
          defaultValue={coffee_amount_value}
          autoComplete="off"
        />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel htmlFor="collection_date" style={{ fontSize: "60%" }}>
          수거날짜
        </StyledLabel>
        <StyledInput
          id="collection_date"
          type={"date"}
          ref={collection_date_ref}
        />
      </StyledInputContainer>

      <Button_2 onClick={collection_button_fn}>데이터 입력</Button_2>
    </StyledContainer>
  );
};

export default Collection_input_page;

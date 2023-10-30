// 6_MY_PAGE_CAFE_COFFEE


import { get_my_emission_list_fn, get_total_emission_fn } from "../../redux/middleware";
import { get_total_page_count_fn } from "../../function/get_total_page_count_fn";
import Small_title_component2 from "../../component/small_title_component";
import { Span_pageNumDirectionBtn, Span_pageNumBtn } from "./style";
import List_component from "../../component/list_component";
import { MAROON_COLOR_1 } from "../../base_style";
import { useState, useEffect } from "react";
import { Button_3 } from "../../base_style";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


const Emission_page = () => {
  //

  const nav = useNavigate();
  const cafe_id = useSelector((state) => state.user_reducer.cafe_id);


  // 10개씩 보여주기
  const page_unit = 10;


  // 페이지네이션 넘버는 5개만 보여주기
  const page_number_unit = 5;
  const [total_amount, set_total_amount] = useState(0);
  const [total_page_count, set_total_page_count] = useState(0);
  const [emission_list, set_emission_list] = useState(new Array());
  const [current_page_number, set_current_page_number] = useState(0);
  const is_login = useSelector((state) => state.user_reducer.is_login);


  // 배출 페이지 접속 시 백과 통신하여 배출 목록 조회
  useEffect(() => {
    //

    if (!is_login) {
      alert("로그인부터 해주세요!");
      nav("/login");
      return;
    }


    (async () => {
      //

      // 나의 배출 목록 가져오기
      // 만약 실패한다면 배출 총량은 가져오지 않는다.
      const { success, data, message } = await get_my_emission_list_fn(cafe_id);
      if (!success) {
        alert(message);
        return;
      }


      // 나의 배출 총량 가져오기
      const total_emission_data = await get_total_emission_fn(cafe_id);
      if (!total_emission_data.success) {
        alert(total_emission_data.message);
        return;
      }


      set_total_amount(total_emission_data.data.total_emission); // 객체 대신 값만 저장
      set_total_page_count(get_total_page_count_fn(data, page_unit));
      set_current_page_number(1);
      set_emission_list(data);
    })();
  }, []);


  return (
    <>
      <List_component
        current_list={emission_list?.slice(
          (current_page_number - 1) * page_unit,
          current_page_number * page_unit
        )}
        total_amount={total_amount}
      />


      <Button_3 onClick={() => nav("/emission/input")}>배출하기</Button_3>
    </>
  );
};


export default Emission_page;

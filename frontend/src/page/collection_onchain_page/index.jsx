// 14_COLLECTION_ONCHAIN


import { get_total_page_count_fn } from "../../function/get_total_page_count_fn";
import Small_title_component from "../../component/small_title_component";
import { Span_pageNumDirectionBtn, Span_pageNumBtn } from "./style";
import { get_completed_reward_fn } from "../../redux/middleware";
import List_component from "../../component/list_component";
import { MAROON_COLOR_1 } from "../../base_style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const Collection_onchain_page = () => {
  //

  const nav = useNavigate();

  // 10개씩 보여주기
  const page_unit = 7;

  // 페이지네이션 넘버는 5개만 보여주기
  const page_number_unit = 5;

  const [total_page_count, set_total_page_count] = useState(0);
  const [collection_choice, set_collection_choice] = useState();
  const [current_page_number, set_current_page_number] = useState(0);

  const [collection_list, set_collection_list] = useState(new Array());

  // 수거 페이지 접속 시 백과 통신하여 수거 목록 조회
  useEffect(() => {
    //
    (async () => {
      const result = await get_completed_reward_fn(); // 이 부분에서 백과 통신하고 결과를 가져옵니다.
      set_current_page_number(1);
      set_collection_list(result.data);
      set_total_page_count(get_total_page_count_fn(result.data));
    })();
  }, []);


  return (
    <>
      <List_component
        current_list={collection_list.slice(
          (current_page_number - 1) * page_unit,
          current_page_number * page_unit
        )}
        set_collection_choice={set_collection_choice}
      />
    </>
  );
};

export default Collection_onchain_page;

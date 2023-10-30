// 13_MY_PAGE_COLLECTOR_CHECK


import { get_my_collections_fn, resigter_reward_fn } from "../../redux/middleware";
import { get_total_page_count_fn } from "../../function/get_total_page_count_fn";
import Small_title_component from "../../component/small_title_component";
import List_component from "../../component/list_component";
import { Button_3 } from "../../base_style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Collection_check_page = () => {
  //

  const nav = useNavigate();
  const is_login = useSelector((state) => state.user_reducer.is_login);
  const collector_id = useSelector((state) => state.user_reducer.collector_id);

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

    if (!is_login) {
      alert("로그인부터 해주세요!");
      nav("/login");
      return;
    }


    (async () => {
      const result = await get_my_collections_fn();
      set_current_page_number(1);
      set_collection_list(result.data);
      set_total_page_count(get_total_page_count_fn(result.data));
    })();
  }, []);


  const verification_button_fn = async () => {
    const { success, message } = await resigter_reward_fn(collector_id);
    alert(message);
  }


  return (
    <>
      <List_component
        current_list={collection_list.slice(
          (current_page_number - 1) * page_unit,
          current_page_number * page_unit
        )}
        set_collection_choice={set_collection_choice}
      />


      <Button_3 onClick={() => verification_button_fn(collector_id)}>전체 검증</Button_3>
    </>
  );
};


export default Collection_check_page;

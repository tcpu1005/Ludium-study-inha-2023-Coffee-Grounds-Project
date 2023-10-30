// 11_MY_PAGE_COLLECTOR


import { get_total_page_count_fn } from "../../function/get_total_page_count_fn";
import Small_title_component from "../../component/small_title_component";
import { Span_pageNumDirectionBtn, Span_pageNumBtn } from "./style";
import List_component from "../../component/list_component";
import { get_collections_fn } from "../../redux/middleware";
import { MAROON_COLOR_1 } from "../../base_style";
import { useState, useEffect } from "react";
import { Button_3 } from "../../base_style";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


const Collection_page = () => {
  //

  const nav = useNavigate();
  const company_name = useSelector((state) => state.user_reducer.company_name);


  // 10개씩 보여주기
  const page_unit = 7;


  // 페이지네이션 넘버는 5개만 보여주기
  const page_number_unit = 5;
  const [total_page_count, set_total_page_count] = useState(0);
  const [collection_choice, set_collection_choice] = useState();
  const [current_page_number, set_current_page_number] = useState(0);
  const [collection_list, set_collection_list] = useState(new Array());


  // 수거 페이지 접속 시 백과 통신하여 수거 요청 목록 조회
  useEffect(() => {
    //

    (async () => {
      const { success, data, message } = await get_collections_fn();
      if (!success) {
        alert(message);
        return;
      }


      set_collection_list(data);
      set_current_page_number(1);
      set_total_page_count(get_total_page_count_fn(data, page_unit));
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


      <Button_3
        onClick={() => {
          //

          if (!company_name) {
            alert("수거자만 접근 가능합니다!");
            return;
          }

          
          // 선택해야만 수거 입력 화면으로 이동될 수 있게 하기
          if (!collection_choice) {
            alert("입력할 수거 요청 건을 선택해주세요!");
            return;
          }


          nav("/collection/input", {
            state: {
              collection_choice_data: collection_list.find(
                (v, i) => v.record_id === collection_choice
              ),
            },
          })
        }
        }
      >
        수거하기
      </Button_3>
    </>
  );
};

export default Collection_page;

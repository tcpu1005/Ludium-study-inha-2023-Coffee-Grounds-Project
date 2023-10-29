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


  const plus_current_page_number_button_fn = () => {
    //

    // 마지막 페이지일 경우 예외 처리
    if (current_page_number >= total_page_count) {
      alert("마지막 페이지입니다.");
      return;
    }
    set_current_page_number((v) => v + 1);
  };


  const minus_current_page_number_button_fn = () => {
    //

    // 최초 페이지일 경우 예외 처리
    if (current_page_number <= 1) {
      alert("첫 페이지입니다.");
      return;
    }
    set_current_page_number((v) => v - 1);
  };


  return (
    <>
      <Small_title_component title={"수거 요청 목록"} />

      <List_component
        current_list={collection_list.slice(
          (current_page_number - 1) * page_unit,
          current_page_number * page_unit
        )}
        set_collection_choice={set_collection_choice}
      />


      <div>
        <Span_pageNumDirectionBtn onClick={minus_current_page_number_button_fn}>
          {"<"}
        </Span_pageNumDirectionBtn>


        {/* ㅜ total_page_count가 0이 아닐 때 */}
        {total_page_count &&
          Array.from({ length: page_number_unit }, (v, i) => i).map((v, i) => {
            //

            // 현재 페이지 넘버를 페이지페이션 유닛 5개 중 중앙으로 위치
            const middle_index = parseInt(page_number_unit / 2);

            // 현재 페이지가 3이면 start_index는 1
            let start_index = current_page_number - middle_index;

            // 현재 페이지가 1, 2이면 start_index는 1
            if (current_page_number <= middle_index) {
              start_index = 1;
            }

            // 현재 페이지가 마지막 페이지와 가까워질 경우 start_index 조정
            if (current_page_number + middle_index >= total_page_count) {
              start_index = total_page_count - page_number_unit + 1;
            }

            const page_number = start_index + i;

            // 현재 페이지일 경우
            const is_current_page = page_number === current_page_number;
            const current_page_style = {
              color: MAROON_COLOR_1,
            };

            const default_style = {};

            return (
              <Span_pageNumBtn
                key={`pagination-${page_number}`}
                onClick={() => set_current_page_number(page_number)}
                style={is_current_page ? current_page_style : default_style}
              >
                {" "}
                {page_number}{" "}
              </Span_pageNumBtn>
            );
          })}

        <Span_pageNumDirectionBtn onClick={plus_current_page_number_button_fn}>
          {">"}
        </Span_pageNumDirectionBtn>
      </div>


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

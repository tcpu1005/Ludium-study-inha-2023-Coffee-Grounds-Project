// 6_MY_PAGE_CAFE_COFFEE


import { useNavigate } from 'react-router';
import { Button_3 } from '../../base_style';
import { useState, useEffect } from 'react';
import { MAROON_COLOR_1 } from "../../base_style";
import List_component from '../../component/list_component';
import Small_title_component from "../../component/small_title_component";


const Emission_page = () => {
    //

    const nav = useNavigate();


    // 10개씩 보여주기
    const page_unit = 10;


    // 페이지네이션 넘버는 5개만 보여주기
    const page_number_unit = 5;
    const [total_page_count, set_total_page_count] = useState(0);
    const [emission_list, set_emission_list] = useState(new Array());
    const [current_page_number, set_current_page_number] = useState(0);


    // 총 배출 양은 리덕스에서 가져오기
    const total_amount = 1000;


    // 배출 페이지 접속 시 백과 통신하여 배출 목록 조회
    useEffect(() => {
        //

        // 백 응답 결과 (리덕스 X)
        // 여기에 액션 날리면 됩니다.
        const new_emission_list = Array.from({ length: 131 }, (i, v) => {
            return { reward_process: "보상 완료", updated_at: Date(), coffee_amount: 100, token: 100 };
        })


        // 목록 개수가 131개일 경우 14개
        const get_new_total_page_count_fn = () => {
            //

            const page_count_temp = new_emission_list.length / page_unit;
            const isInt = page_count_temp === parseInt(page_count_temp);
            if (!isInt) {
                return parseInt(page_count_temp) + 1;
            }


            return page_count_temp;
        }


        set_current_page_number(1);
        set_emission_list(new_emission_list);
        set_total_page_count(get_new_total_page_count_fn());
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
            <Small_title_component title={"나의 배출 목록"} />


            <List_component current_list={emission_list.slice((current_page_number - 1) * page_unit, current_page_number * page_unit)} total_amount={total_amount} />


            <div>
                <span onClick={minus_current_page_number_button_fn}>{"<"}</span>


                {Array.from({ length: page_number_unit }, (v, i) => i).map((v, i) => {
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
                    }


                    const default_style = {};


                    return <span key={`pagination-${page_number}`} onClick={() => set_current_page_number(page_number)} style={is_current_page ? current_page_style : default_style}> {page_number} </span>;
                })}


                <span onClick={plus_current_page_number_button_fn}>{">"}</span>
            </div>


            <Button_3 onClick={() => nav("/emission/input")}>배출하기</Button_3>
        </>
    );
};


export default Emission_page;

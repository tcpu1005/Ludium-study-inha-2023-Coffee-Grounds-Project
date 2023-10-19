// 6_MY_PAGE_CAFE_COFFEE

import { Button_3 } from '../../base_style';
import { useState, useEffect } from 'react';
import { MAROON_COLOR_1 } from "../../base_style";
import List_component from '../../component/list_component';
import Small_title_component from "../../component/small_title_component";


const Emission_page = () => {
    //

    // 10개식 보여주기
    const page_unit = 10;
    const [current_page_number, set_current_page_number] = useState(0);
    const [emission_list, set_emission_list] = useState(new Array());
    const [total_page_count, set_total_page_count] = useState(0);


    // 총 배출 양은 리덕스에서 가져오기
    const total_amount = 1000;


    // 배출 페이지 접속 시 백과 통신하여 배출 목록 조회
    useEffect(() => {
        //

        // 백 응답 결과 (리덕스 X)
        // 여기에 액션 날리면 됩니다.
        const new_emission_list = Array.from({ length: 100 }, (i, v) => {
            return { status: "보상 완료", date: Date(), amount: 100, token: 100 };
        })


        const new_total_page_count = parseInt(new_emission_list.length / page_unit) + 1;


        set_current_page_number(1);
        set_emission_list(new_emission_list);
        set_total_page_count(new_total_page_count);
    }, []);


    return (
        <>
            <Small_title_component title={"나의 배출 목록"} />


            <List_component current_list={emission_list.slice((current_page_number - 1) * page_unit, current_page_number * page_unit)} total_amount={total_amount} />


            <div>
                <span>{"<"}</span>
                {Array.from({ length: total_page_count }, (v, i) => i).map((v, i) => {

                    // 현재 페이지일 경우 색 조정
                    if (i + 1 === current_page_number) {
                        return <span key={`pagination-${i}`} style={{ color: MAROON_COLOR_1 }}>{i + 1}</span>;
                    }
                    return <span key={`pagination-${i}`}>{i + 1}</span>;
                })}
                <span>{">"}</span>
            </div>


            <Button_3>배출하기</Button_3>
        </>
    );
};


export default Emission_page;

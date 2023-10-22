import { Div_bigContainer, Span_el, Span_el_request, Span_el_completed, Span_el_extra, Input_selectNBtn, Input_selectYBtn, Div_totalAmount } from "./style";


const List_component = ({ current_list, total_amount, set_collection_choice }) => {
    //


    // 라디오 선택 시 선택한 수거 데이터의 UUID 값 저장
    const select_radio_fn = (e) => {
        const idx = e.target.value;
        set_collection_choice(current_list[idx].record_id);
    };


    return (
        <Div_bigContainer>
            {current_list.map((v, i) => {
                return (
                    <div key={`list-${i}`}>
                        {
                            // 배출 목록 페이지가 아닌 수거 목록 페이지일 때
                            set_collection_choice &&
                            (
                                // 수거 완료 상태일 경우 선택 불가
                                v.reward_process !== "수거요청"
                                    ?
                                    <Input_selectNBtn type="radio" name="collection_choice" value={`${i}`} disabled />
                                    :
                                    <Input_selectYBtn type="radio" name="collection_choice" value={`${i}`} onChange={(e) => select_radio_fn(e)} defaultChecked/>
                            )
                        }
                        { v.reward_process === "수거요청" ? 
                        <>
                        <Span_el_request key={`list-reward-process-${i}`}>{v.reward_process}</Span_el_request>  
                        <Span_el> | </Span_el>
                        </>
                        :
                        v.reward_process === "수거완료" ?
                        <>
                        <Span_el_completed key={`list-reward-process-${i}`}>{v.reward_process}</Span_el_completed>  
                        <Span_el> | </Span_el>
                        </>
                        : 
                        <>
                        <Span_el_extra key={`list-reward-process-${i}`}>{v.reward_process}</Span_el_extra>  
                        <Span_el> | </Span_el>
                        </>
                    }
                        <Span_el key={`list-updated-at-${i}`}>{`${new Date(v.updated_at).getMonth() + 1}월 ${new Date(v.updated_at).getDate()}일`} | </Span_el>
                        <Span_el key={`list-coffee-amount-${i}`}>{v.coffee_amount}kg | </Span_el>
                        <Span_el key={`list-token-${i}`}>{v.token}token</Span_el>
                    </div>
                )
            })}


            {total_amount && <Div_totalAmount>총 배출량 : {total_amount}kg</Div_totalAmount>}
        </Div_bigContainer>
    );
};


export default List_component;

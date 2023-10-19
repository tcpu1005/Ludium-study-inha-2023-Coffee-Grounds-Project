import { Span_el } from "./style";


const List_component = ({ current_list, total_amount }) => {
    //

    return (
        <div>
            {current_list.map((v, i) => {
                return (
                    <div key={`list-${i}`}>
                        <Span_el key={`list-status-${i}`}>{v.status} | </Span_el>
                        <Span_el key={`list-date-${i}`}>{`${new Date(v.date).getMonth() + 1}월 ${new Date(v.date).getDate()}일`} | </Span_el>
                        <Span_el key={`list-amount-${i}`}>{v.amount}kg | </Span_el>
                        <Span_el key={`list-token-${i}`}>{v.token}token</Span_el>
                    </div>
                )
            })}


            {total_amount ? <div>총 배출량 : {total_amount}kg</div> : <></>}
        </div>
    );
};


export default List_component;

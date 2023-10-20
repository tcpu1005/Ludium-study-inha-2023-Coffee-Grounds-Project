// 8_MY_PAGE_CAFE_INSENTIVE


import Small_title_component from "../../component/small_title_component";
import { useNavigate } from "react-router";


const Insentive_visualization_page = () => {
    //

    const nav = useNavigate();


    // 블록체인 통신 예정
    const total_token_amount = 131;


    // 백 통신 예정
    const total_emission_amount = 1000;


    return (
        <>
            <Small_title_component title="나의 배출 성과" />


            <div onClick={() => nav("/insentive/token")}>
                <span>지급된 토큰 총량</span>
                <span>{total_token_amount}token</span>
                <div>잔액 확인하기</div>
            </div>


            <div>
                <span>배출 총량</span>
                <span>{total_emission_amount}kg</span>
            </div>


            <div>
                <span>쓰레기 봉투 절감 비용</span>
                <span>{parseInt(total_emission_amount / 20) * 620}원</span>
            </div>


            <div>
                <span>감소한 탄소 배출량</span>
                <span>"계산식 필요"</span>
            </div>


            <div>
                <span>감소한 매립 비용</span>
                <span>{total_emission_amount * 100}원</span>
            </div>
        </>
    )
}


export default Insentive_visualization_page;
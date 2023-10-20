// 2_JOIN_CHOICE


import Big_title_component from "../../component/big_title_component";
import { Button_2 } from "../../base_style";
import { useNavigate } from "react-router";


const Join_choice_page = () => {
    //

    const nav = useNavigate();
    return (
        <>
            <Big_title_component title="회원가입" />
            <div>
                <Button_2 onClick={() => nav("/join/cafe")}>카페</Button_2>
            </div>
            <div>
                <Button_2 onClick={() => nav("/join/collector")}>수거업체</Button_2>
            </div>
        </>
    )
}


export default Join_choice_page;
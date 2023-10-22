// 2_JOIN_CHOICE


import Big_title_component from "../../component/big_title_component";
import { useNavigate } from "react-router";
import {Button_choice} from "./style";


const Join_choice_page = () => {
    //

    const nav = useNavigate();
    return (
        <>
            <Big_title_component title="회원 유형" />
            
            <div>
                <Button_choice onClick={() => nav("/join/cafe")}>카페</Button_choice>
            </div>
            <div>
                <Button_choice onClick={() => nav("/join/collector")}>수거업체</Button_choice>
            </div>
        </>
    )
}


export default Join_choice_page;
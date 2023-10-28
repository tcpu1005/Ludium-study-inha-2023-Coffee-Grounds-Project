// 2_JOIN_CHOICE


import Small_title_component from "../../component/small_title_component";
import { useNavigate } from "react-router";
import { Button_choice, Background_image} from "./style";
import { Button_1, Button_5 } from "../../base_style";


const Join_choice_page = () => {
    //

    const nav = useNavigate();
    return (
        <>
       <Background_image></Background_image>
            <Small_title_component title="회원 유형" />
            <div>
                <Button_1 onClick={() => nav("/join/cafe")}>카페</Button_1>
            </div>

            <div>
                <Button_5 onClick={() => nav("/join/collector")}>수거업체</Button_5>
            </div>
            
            
        </>
    );

};

export default Join_choice_page;

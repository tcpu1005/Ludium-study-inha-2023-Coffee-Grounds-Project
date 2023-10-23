// 2_JOIN_CHOICE


import Small_title_component from "../../component/small_title_component";
import { useNavigate } from "react-router";
import { Button_choice } from "./style";
import { Button_1, Button_5 } from "../../base_style";
import Background_image3 from "./style";


const Join_choice_page = () => {
    //

    const nav = useNavigate();
    return (
        <>
            <Small_title_component title="회원 유형" />
            <Background_image3>
                <div>
                    <Button_1 onClick={() => nav("/join/cafe")}>카페</Button_1>
                </div>

                <div>
                    <Button_5 onClick={() => nav("/join/collector")}>수거업체</Button_5>
                </div>
            </Background_image3>
        </>
    );

};

export default Join_choice_page;

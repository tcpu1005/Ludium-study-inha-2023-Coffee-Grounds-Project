import { Button_1, MAROON_COLOR_1, BEIGE_COLOR_1 } from "../../base_style";
import { default_axios_fn } from "../../redux/middleware/axios_test";

const Default_component = () => {
    //

    // ㅜ 백에 axios 요청 보내고 응답 받기
    const help_button_fn = async () => {
        //
        const back_data = await default_axios_fn();
        const { success, message, res_data } = back_data.data;
        console.log(`success : ${success}`);
        console.log(`message : ${message}`);
        console.log(`res_data : ${res_data}`);
    }


    return (
        <div style={{ width: "100%", padding: "5vw 0", backgroundColor: BEIGE_COLOR_1 }}>
            <h1 style={{ color: MAROON_COLOR_1 }}>Default_component</h1>
            <h6 style={{ color: MAROON_COLOR_1 }}>언제든 도움 요청하고 서로 도와주자!</h6>
            <Button_1 onClick={help_button_fn}>도움 요청!</Button_1>
        </div>
    )
}


export default Default_component;
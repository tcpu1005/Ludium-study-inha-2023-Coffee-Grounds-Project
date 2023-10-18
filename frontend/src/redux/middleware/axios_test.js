import axios from "axios";


const BACK_SERVER_PATH = process.env.BACK_SERVER_PATH || "http://localhost:8080";


// 리덕스 구현 전까지 axios 함수 구현은 여기서
export const default_axios_fn = async () => await axios({
    //
    url: `${BACK_SERVER_PATH}/api/vi/axios-test`,
    method: "post",
    data: {
        front_text: "front_text",
    }
})


// CORS 에러 => 백엔드에서 허용해줘야 함
// Access to XMLHttpRequest at 'http://localhost:8080/aixos-test' from origin 'http://localhost:3001' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.


// 백엔드에서 응답하는 API 함수가 없을 경우 발생한다.
// SEQUERLIZE - CORS - ROUTER - LISTEN 순서로 바꾸니 해결되었다.
// POST http://localhost:8080/aixos-test 404 (Not Found)


// 백 서버에서 에러가 발생했을 떄
// POST http://localhost:8080/api/vi/axios-test net::ERR_CONNECTION_REFUSED
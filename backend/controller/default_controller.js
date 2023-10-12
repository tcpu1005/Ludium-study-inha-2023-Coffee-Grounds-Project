// ㅜ 이 파일에서 사용할 테이블 불러오기
const { Cafe } = require("../model");
// ...

// 컨트롤러 코드 예시
// request 요청을 받아서 백단 작업 후 response 응답
module.exports.default_fn = async (req, res) => {
    //
    // const { } = req.params;

    // 데이터 통신이 필요한 경우 무조건 예외 처리 적용하기
    try {
        //
        // DB 작업
        // ...
        const defaultData = "defaultData";

        res.send({ success: true, data: defaultData, message: "무엇무엇에 성공하였습니다." });
        //
    } catch (err) {
        console.log(err);
        res.send({ success: false, message: "무엇무엇에 실패하였습니다." });
    }
}
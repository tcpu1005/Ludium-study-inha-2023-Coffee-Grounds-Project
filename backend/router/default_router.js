const router = require("express").Router();


// 사용할 컨트롤러들 불러오기
const { default_controller } = require("../controller");
// ...


// 라우터 코드 예시
// 라우터 => Express의 router 객체를 가져와서 컨트롤러와 연결하는 역할 수행
// REST API 방식 사용 => URI는 정보의 자원을 표현, 자원에 대한 행위는 HTTP 메소드로 표현
router.post("/api/vi/axios-test", default_controller.default_fn);
// router.post("/api/vi/axios-test", (req, res) => console.log(req.body));


// 어떤 기능의 라우터인지 기재하기
// ...


module.exports = router;
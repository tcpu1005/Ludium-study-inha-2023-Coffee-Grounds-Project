const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;


// ㅜ 요 코드가 있어야 프론트에서 axios 요청으로 보내온 데이터를 받을 수 있다.
app.use(express.json());


// ㅜ 시퀄라이즈 테이블 생성 (서버 실행 시마다 초기화됨)
const { sequelize } = require("./model");
sequelize.sync({ force: true })
  .then(() => {
    console.log("<<< DB is connected >>>");
  }).catch((err) => {
    console.log(`<<< DB ERROR >>>\n${err}`);
  })


// ㅜ CORS 에러 해결
const FRONT_SERVER_PATH = process.env.FRONT_SERVER_PATH || "http://localhost:3000";
app.use(cors({
  origin: [
    FRONT_SERVER_PATH,
  ]
}));


// ㅜ 라우터 사용 => 모든 API 함수는 라우터 폴더 내에 구현
const router = require("./router");
Object.values(router).forEach((rt) => app.use(rt));


// ㅜ 백 서버 시작
app.listen(PORT, () => {
  console.log(`<<< PORT : ${PORT} >>>`);
});
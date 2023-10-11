const express = require("express");
const app = express();
const PORT = 3000;

// 백 서버 시작
app.listen(PORT, () => {
  console.log(`<<< PORT : ${PORT} >>>`);
});

const { sequelize } = require("./model");

sequelize.sync({ force: true })
  .then(() => {
    console.log("<<< DB is connected >>>");
  }).catch((err) => {
    console.log(`<<< DB ERROR >>>\n${err}`);
  })

// 라우터 사용 => 모든 API 함수는 라우터 폴더 내에 구현
const router = require("./router");
Object.values(router).forEach((rt) => app.use(rt));
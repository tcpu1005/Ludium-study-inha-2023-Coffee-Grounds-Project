const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`<<< PORT : ${PORT} >>>`);
});

const { sequelize } = require("./model");

// ㅜ 라우터로 빠질 모델들
const { Cafe } = require("./model");

sequelize.sync({ force: true })
  .then(() => {
    console.log("<<< DB is connected >>>");
  }).catch((err) => {
    console.log(`<<< DB ERROR >>>\n${err}`);
  })

// app.get("/path", (req, res) => {
//   // API 함수
// })

// app.post("/path/:params", (req, res) => {
//   // API 함수
//   // DB 로우 데이터 생성, 수정, 삭제, 조회
// })
// npm i dotenv
require("dotenv").config();

const config = {
    dev: {
        username: process.env.MYSQL_USERNAME || "root",
        password: process.env.MYSQL_PASSWORD || "1234",
        database: process.env.MYSQL_DATABASE || "test",
        host: process.env.MYSQL_HOST || "127.0.0.1",
        dialect: "mysql",
        port: 3306,
    }
}

// ㅜ 에러 발생 이유 : mySql 설치 안 함
// SequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:3306

// ㅜ 에러 발생 이유 : DB 생성 안 함
// SequelizeConnectionError: Unknown database 'test0928'

module.exports = config;
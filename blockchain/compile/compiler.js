const { compile_fn } = require("./index");


// const fileName = 'default_contract';
// const contractName = 'default_contract';
// compile_fn(fileName, contractName);


// 오픈 재플린의 표준 컨트랙트를 상속 받을 경우 solc와의 버전 차이로 에러 발생함
const fileName = 'Incheon_Coffeebak_Token_v1.0';
const contractName = 'Incheon_Coffeebak_Token';
compile_fn(fileName, contractName);
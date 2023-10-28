const { deploy } = require("./index");
// deploy("default_contract");


// 리믹스에서 컴파일과 배포를 다 진행하거나
// 아니면 리믹스에서는 컴파일만 하고 ethers에서 배포만 할 수도 있다.


// 뭄바이 폴리곤 스캔
// https://mumbai.polygonscan.com/


// 2023.10.28.01.35 ICT v2.0 (ethers 배포)
// 0x279609ED694c06452992b826C7F4750efE3a4280


// 2023.10.28.01.50 USDC v1.0 (ethers 배포)
// 0xbfD587eA566127EeFE104Da9eF11a6F70432B2ED


// 2023.10.28.04.05 토큰 환전 v1.0 (리믹스 배포)
// 0x8094E2E2e6D4D336b74BE7C1dd5fDDBBca9f1a6E


// 2023.10.28.05.00 커피박 배출 v1.0 (리믹스 배포)
// 0xa3F636B4698516d2bd163529c65AD7B34D4d2b2c


// deploy("Incheon_Coffeebak_Token_flattened_v2.0");
// deploy("USDC_Token_flattened_v1.0");
// deploy("Token_Exchange_flattened_v1.0", ["0x279609ED694c06452992b826C7F4750efE3a4280", 1000, "0xbfD587eA566127EeFE104Da9eF11a6F70432B2ED"]);
deploy("Coffeebak_Emission_flattened_v1.0", ["0x279609ED694c06452992b826C7F4750efE3a4280", 30]);

// Problem
// 폴리곤 테스트 네트워크인 뭄바이를 사용해야 하는데 그러려면 solc 컴파일러 버전은 v0.8.19 이하여야 함
// 오픈 재플린 위자드 통해서 만든 컨트랙트는 다 v0.8.20 버전임
// 리믹스에서 v0.8.19 버전 선택 시 에러 발생함
// 모든 컨트랙트의 컴파일 버전을 v0.8.20에서 v0.8.19로 바꿔도 순식간에 다시 돌아가여 에러를 해결할 수 없음
// solc 컴파일러 사용 시 아래와 같은 에러 발생함
// C:\Ludium-study-inha-2023-Coffee-Grounds-Project\blockchain\compile\index.js:50
// const bytecode = compiledCode.contracts[fileName][contractName].evm.bytecode.object;
// TypeError: Cannot read properties of undefined (reading 'Incheon_Coffeebak_Token')


// Solution
// 리믹스에서 일단 최신 버전 컴파일러로 컴파일 후
// flatten 진행하고
// 컨트랙트 속 모든 버전 변경 후 배포해서
// abi, bytecode, ca 값을 vscode에 하드 코딩으로 복붙한 다음
// 인터랙트 하면 성공됨


const { get_read_only_contract_fn, get_contract_fn } = require("./index");


(async () => {
    //

    const fileName = "Incheon_Coffeebak_Token_flattened";


    const read_only_contract = await get_read_only_contract_fn(fileName);
    const owner = await read_only_contract.owner();
    console.log(owner);
})();

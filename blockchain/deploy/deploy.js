// ㅜ 참고한 링크
// https://docs.ethers.org/v5/migration/web3/


const fs = require("fs");
const path = require("path");
const ethers = require("ethers");
const abi = require("../compile/default_contract_abi.json");
// const { get_polygon_provider_fn, get_wallet_fn } = require("../create_wallet_ethers_v6.8");
const { get_infura_provider_fn, get_wallet_fn } = require("../create_wallet_ethers_v5.7.2");


const folderName = "compile";
const fileName = "default_contract_bytecode.bin";
const bytecodePath = path.join(__dirname, "..", folderName, fileName);
const bytecode = fs.readFileSync(bytecodePath, 'utf8');
const private_key = process.env.JIWON_PRIVATE_KEY;


// ethers
(async () => {
    const signer = get_wallet_fn(private_key, get_infura_provider_fn());
    const factory = new ethers.ContractFactory(abi, bytecode, signer);

    
    // solc 버전, ethers 버전에 따라 이슈 발생 (해결 완)
    const contract = await factory.deploy();
    console.log('contract address', contract.address);


    // wait for contract creation transaction to be mined
    await contract.deployTransaction.wait();
})();


// ethers
// // 읽기 전용 쿼리에 대한 계약을 시작할 때 공급자를 전달합니다.
// // pass a provider when initiating a contract for read only queries
// const contract = new ethers.Contract(contractAddress, abi, provider);
// const value = await contract.getValue();


// // 상태 변경 작업을 위한 계약 인스턴스를 생성하기 위해 서명자를 전달합니다.
// // pass a signer to create a contract instance for state changing operations
// const contract = new ethers.Contract(contractAddress, abi, signer);
// const tx = await contract.changeValue(33);


// // 거래가 채굴될 때까지 기다리세요
// // wait for the transaction to be mined
// const receipt = await tx.wait();
// ㅜ 참고한 링크
// https://docs.ethers.org/v5/migration/web3/
// https://docs.web3js.org/guides/smart_contracts/deploying_and_interacting_with_smart_contracts/


const fs = require("fs");
require("dotenv").config();
const path = require("path");
const ethers = require("ethers");
const abi = require("../compile/default_contract_abi.json");
// const { get_polygon_provider_fn, get_wallet_fn } = require("../create_wallet_ethers_v6.8");
const { get_infura_provider_fn, get_wallet_fn } = require("../create_wallet_ethers_v5.7.2");


module.exports.deploy = async (fileName) => {
    //

    const folderName = "compile";
    const abiFileName = `${fileName}_abi.json`;
    const privateKey = process.env.JIWON_PRIVATE_KEY;
    const bytedcodeFileName = `${fileName}_bytecode.bin`;


    // Read the bytecode from the file system
    // 바이트코드 bin 파일을 읽어오고
    const bytecodePath = path.join(__dirname, "..", folderName, bytedcodeFileName);
    const bytecode = fs.readFileSync(bytecodePath, 'utf8');


    // Create a new contract object using the ABI and bytecode
    // abi.json 파일도 가져온다.
    const abi = require(`../${folderName}/${abiFileName}`);

    try {
        // ethers
        // 컨트랙트 배포하는데 서명할 지갑 객체 가져오고
        const apiKey = process.env.JIWON_API_KEY;
        const signer = get_wallet_fn(privateKey, get_infura_provider_fn(apiKey));


        // 컨트랙트 객체를 생성해서
        const factory = new ethers.ContractFactory(abi, bytecode, signer);


        // solc 버전, ethers 버전에 따라 이슈 발생 (해결 완)
        // 배포한다.
        const contract = await factory.deploy();
        console.log('contract address', contract.address);


        // wait for contract creation transaction to be mined
        // 마이닝 될 떄까지 기다린다.
        await contract.deployTransaction.wait();


        // Write the Contract address to a new file
        const deployedAddressPath = path.join(__dirname, "..", folderName, `${fileName}_ca.bin`);
        fs.writeFileSync(deployedAddressPath, contract.address);
    } catch (error) {
        console.error(error);
    }
}
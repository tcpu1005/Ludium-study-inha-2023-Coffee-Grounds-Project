// ㅜ 참고한 링크
// https://docs.ethers.org/v5/migration/web3/


const ethers = require("ethers");
const { get_ca_fn } = require("../deploy");
const { get_abi_fn } = require("../compile");
const { get_infura_provider_fn, get_wallet_fn } = require("../create_wallet_ethers_v5.7.2");


module.exports.get_read_only_contract_fn = async (fileName) => {
    //

    const ca = get_ca_fn(fileName);
    const abi = get_abi_fn(fileName);
    const apiKey = process.env.JIWON_API_KEY;


    try {
        const provider = get_infura_provider_fn(apiKey);


        // ethers
        // 읽기 전용 쿼리에 대한 계약을 시작할 때 공급자를 전달합니다.
        // pass a provider when initiating a contract for read only queries
        return new ethers.Contract(ca, abi, provider);
    } catch (error) {
        console.log(error);
    }
}


module.exports.get_contract_fn = async (fileName) => {
    //

    const ca = get_ca_fn(fileName);
    const abi = get_abi_fn(fileName);
    const apiKey = process.env.JIWON_API_KEY;
    const privateKey = process.env.JIWON_PRIVATE_KEY;


    try {
        const provider = get_infura_provider_fn(apiKey);
        const signer = get_wallet_fn(privateKey, provider);


        // 상태 변경 작업을 위한 계약 인스턴스를 생성하기 위해 서명자를 전달합니다.
        // pass a signer to create a contract instance for state changing operations
        return new ethers.Contract(ca, abi, signer);
    } catch (error) {
        console.log(error);
    }
}




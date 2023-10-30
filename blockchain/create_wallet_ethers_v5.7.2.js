// ethers 5.7.2


const { ethers } = require("ethers");


// // 지갑 생성 성공
// const new_wallet = ethers.Wallet.createRandom();
// console.log(new_wallet);
// // HDNodeWallet {
// //     provider: null,
// //     address: '0x7c564eBD81307509daa2Ea46A64b1F179fe6B1Bc',
// //     publicKey: '0x03e036f2db0f9c94f885f7f15c0dd99e0a2d7bfd48bf201f281a81d67c21526964',
// //     fingerprint: '0x1771cf98',
// //     parentFingerprint: '0xb4e2d4f5',
// //     mnemonic: Mnemonic {
// //       phrase: 'tired blood pact aim hover coconut air polar episode injury situate output',
// //       password: '',
// //       wordlist: LangEn { locale: 'en' },
// //       entropy: '0xe2a2fe7a82a6e659c15d3b4bee8726ce'
// //     },
// //     chainCode: '0xe23bc200cb715b386883e2d28a58ea792f2c314299130e34153b4aa8583d727d',
// //     path: "m/44'/60'/0'/0/0",
// //     index: 0,
// //     depth: 5
// //   }


// console.log(Object.keys(new_wallet));
// [
//     'provider',
//     'address',
//     'publicKey',
//     'fingerprint',
//     'parentFingerprint',
//     'mnemonic',
//     'chainCode',
//     'path',
//     'index',
//     'depth'
// ]


// // 메타마스크에서 개인키로 계정 가져오기 가능
// // 0x12a3fd1fb9c45b3aef6b37e4d1056d691aeb374b7631487bbc912de68bcec3ce
// console.log(`new_wallet.privateKey : ${new_wallet.privateKey}`);


// // 메타마스크 주소랑 동일
// console.log(`new_wallet.address : ${new_wallet.address}`);


// // provider 가져오는 방법1
// (async () => {
//     //
//     // ㅜ 폴리곤 공식 문서의 RPC 엔드포인트 사용 시 에러 발생
//     // https://wiki.polygon.technology/docs/pos/reference/rpc-endpoints/#rpc-api-methods
//     // JsonRpcProvider가 네트워크를 감지하지 못해 시작할 수 없습니다. 1초 후에 다시 시도하세요(URL이 잘못되었거나 노드가 시작되지 않았을 수 있음)
//     // JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started) 
//     // const provider = new ethers.JsonRpcProvider("https://rpc-mumbai.matic.today");


//     // JsonRpcProvider {}
//     const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai");
//     console.log(provider);


//     const my_private_key = process.env.JIWON_PRIVATE_KEY;
//     const my_wallet = new ethers.Wallet(my_private_key, provider);
//     console.log(my_wallet);


//     const my_wallet_balance = await provider.getBalance(my_wallet.address);
//     console.log(`my_wallet_balance : ${my_wallet_balance}`);
// })();


// // provider 가져오는 방법2
// (async () => {
//     //
//     // EtherscanProvider { network: Network {}, apiKey: null }
//     const provider = new ethers.EtherscanProvider("maticmum");
//     console.log(provider);


//     const my_private_key = process.env.JIWON_PRIVATE_KEY || ethers.Wallet.createRandom(provider);
//     const my_wallet = new ethers.Wallet(my_private_key, provider);
//     console.log(my_wallet);


//     const my_wallet_balance = await provider.getBalance(my_wallet.address);
//     console.log(`my_wallet_balance : ${my_wallet_balance}`);
//     console.log(ethers.formatEther(my_wallet_balance));


//     const tx = {
//         to: new_wallet.address,
//         value: 1,
//     }


//     // 트랜잭션 전송
//     const tx_res = await my_wallet.sendTransaction(tx);
//     console.log(tx_res);


//     // 마이닝
//     const receipt = await tx_res.wait();
//     console.log(receipt);
// })();


module.exports.get_new_wallet_fn = (provider) => ethers.Wallet.createRandom(provider);
module.exports.get_wallet_fn = (private_key, provider) => new ethers.Wallet(private_key, provider);


// solc v0.8.19 기준 provider 배포 이슈...


// Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, version=providers/5.7.2)
module.exports.get_polygon_provider_fn = () => new ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");


module.exports.get_etherscan_provider_fn = () => new ethers.providers.EtherscanProvider("maticmum");
module.exports.get_ankr_provider_fn = () => new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai");
module.exports.get_infura_provider_fn = (api_key) => new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${api_key}`);
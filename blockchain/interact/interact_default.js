// ㅜ 참고한 링크
// https://docs.ethers.org/v5/migration/web3/


const { get_read_only_contract_fn, get_contract_fn } = require("./index");


(async () => {
    //

    const fileName = "default_contract";

    // ethers
    // pass a provider when initiating a contract for read only queries

    const read_only_contract = await get_read_only_contract_fn(fileName);
    const message = await read_only_contract.get_message();
    console.log(message);


    // pass a signer to create a contract instance for state changing operations
    const contract = await get_contract_fn(fileName);
    const tx = await (contract).set_message("New Hello World!");


    // wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log(receipt);


    const new_message = await read_only_contract.get_message();
    console.log(new_message);
})();

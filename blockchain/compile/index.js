const folderName = "contract";
const fileName = 'default_contract.sol';
const contractName = 'default_contract';

const { compile_fn } = require("./compiler");


compile_fn(folderName, fileName, contractName);
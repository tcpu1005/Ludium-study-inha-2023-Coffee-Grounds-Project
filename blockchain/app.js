const { randomBytes } = require("crypto");
const elliptic = require("elliptic");


const ec = new elliptic.ec("secp256k1");


const get_private_key = (private_key) => {
    //

    return private_key || randomBytes(32).toString("hex");
}


const get_public_key = (private_key) => {
    //

    const key_pair = ec.keyFromPrivate(private_key);
    return key_pair.getPublic().encode("hex", true);
}


// ㅜ ENV 지갑 생성 성공
// 메타마스크에서 계정 가져오기 가능
const private_key = get_private_key();


console.log(private_key);
console.log(get_public_key(private_key));
const { randomBytes } = require("crypto");


const elliptic = require("elliptic");
const ec = new elliptic.ec("secp256k1");


// 256자리의 2진수 랜덤 값 생성 후 16진수로 변환
const get_private_key = () => randomBytes(32).toString("hex");


const get_public_key = (private_key) => {
    //

    const key_pair = ec.keyFromPrivate(private_key);
    return key_pair.getPublic().encode("hex", true);
}


// 공개키 앞 24자리를 잘라냄으로써 40자리를 남기는 이더리움 방식 (elliptic 공개키는 앞에 02, 03 값이 추가됨)
const get_account = (public_key) => Buffer.from(public_key).slice(26).toString();


// 메타마스크에서 개인키로 계정 가져오기 가능
const private_key = get_private_key();
const public_key = get_public_key(private_key);


// 그러나 지갑 주소가 다름
const account = get_account(public_key);


console.log(private_key);
console.log(public_key);
console.log(account);



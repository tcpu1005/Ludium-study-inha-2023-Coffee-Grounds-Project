const { Users, CafeDetails, CollectorDetails } = require("../model");
const { get_new_wallet_fn, get_infura_provider_fn } = require("../../blockchain/create_wallet_ethers_v5.7.2");


// 카페 회원가입
module.exports.register_cafe_user_controller = async (req, res) => {
  //

  const {
    login_id,
    user_name,
    cafe_name,
    address_si,
    address_gu,
    address_dong,
    login_password,
  } = req.body;


  // if (!login_id) {
  //   return res.send({ message: "login_id 값이 유효하지 않습니다." });
  // }


  try {
    const existingUser = await Users.findOne({ where: { login_id } });
    if (existingUser) {
      return res.send({ success: false, message: "이미 존재하는 ID입니다." });
    }
    
    
    const api_key = process.env.JIWON_API_KEY;
    const provider = get_infura_provider_fn(api_key);
    const wallet = get_new_wallet_fn(provider);
    const wallet_privateKey = wallet.privateKey;
    const wallet_address = wallet.address;


    const created_user = await Users.create({
      login_id,
      user_name,
      wallet_address,
      login_password,
      user_type: "Cafe",
      wallet_privateKey,
    });


    const created_cafeDetails = await CafeDetails.create({
      user_id: created_user.user_id,
      cafe_name,
      address_si,
      address_gu,
      address_dong,
      total_emissions: 0,
    });


    res.send({ success: true, message: "회원 가입에 성공하였습니다." });
  } catch (error) {
    console.error(`register_cafe_user_controller : ${error}`);
    res.send({ success: false, message: "회원 가입에 실패하였습니다." });
  }
};


// 수거업체 회원가입
module.exports.register_collector_user_controller = async (req, res) => {
  //

  const {
    login_id,
    user_name,
    company_name,
    login_password,
  } = req.body;


  // if (!login_id) {
  //   return res
  //     .status(400)
  //     .send({ message: "login_id 값이 유효하지 않습니다." });
  // }


  try {
    const existingUser = await Users.findOne({ where: { login_id } });
    if (existingUser) {
      return res.send({ success: false, message: "이미 존재하는 ID입니다." });
    }


    const api_key = process.env.JIWON_API_KEY;
    const provider = get_infura_provider_fn(api_key);
    const wallet = get_new_wallet_fn(provider);
    const wallet_privateKey = wallet.privateKey;
    const wallet_address = wallet.address;


    const created_user = await Users.create({
      login_id,
      user_name,
      login_password,
      wallet_address,
      wallet_privateKey,
      user_type: "Collector",
    });


    const created_collectorDetails = await CollectorDetails.create({
      user_id: created_user.user_id,
      company_name,
    });


    res.send({ success: true, message: "회원 가입에 성공하였습니다." });
  } catch (error) {
    console.error(`register_collector_user_controller : ${error}`);
    res.send({ success: false, message: "회원 가입에 실패하였습니다." });
  }
};

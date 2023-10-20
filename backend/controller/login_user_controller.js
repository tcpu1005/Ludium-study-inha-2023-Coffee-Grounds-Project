const { Users, CafeDetails, CollectorDetails } = require("../model");

module.exports.login_user_controller = async (req, res) => {
  try {
    const { login_id, login_password } = req.body;
    const user = await Users.findOne({ where: { login_id } });
    // 데이터베이스에서 해당 login_id의 사용자를 찾는다.
    user_id = user.user_id;
    const user_id_use = await Users.findOne({
      where: { user_id },
      include: [
        {
          model: CafeDetails,
          attributes: [
            "cafe_id",
            "cafe_name",
            "address_si",
            "address_gu",
            "address_dong",
          ],
        },
        {
          model: CollectorDetails,
          attributes: ["collector_id", "company_name"],
        },
      ],
    });
    // console.log(Object.keys(user_id_use.CafeDetail.dataValues));
    // console.log(Object.keys(user_id_use.CollectorDetail.dataValues));
    if (user && user.login_password === login_password) {
      // 실제로는 비밀번호 해시와 비교 필요

      let response_data = {};
      if (user.user_type === "Cafe") {
        console.log("카페");
        response_data = {
          success: true,
          user_id: user.user_id,
          user_name: user.user_name,
          user_type: user.user_type,
          wallet_address: user.wallet_address,
          message: "로그인에 성공하였습니다.",
          cafe_id: user_id_use.CafeDetail.cafe_id,
          cafe_name: user_id_use.CafeDetail.cafe_name,
          address_si: user_id_use.CafeDetail.address_si,
          address_gu: user_id_use.CafeDetail.address_gu,
          address_dong: user_id_use.CafeDetail.address_dong,
        };
      }
      if (user.user_type === "Collector") {
        console.log("컴퍼니");
        response_data = {
          success: true,
          user_id: user.user_id,
          user_name: user.user_name,
          user_type: user.user_type,
          wallet_address: user.wallet_address,
          message: "로그인에 성공하였습니다.",
          collector_id: user_id_use.CollectorDetail.collector_id,
          company_name: user_id_use.CollectorDetail.company_name,
        };
      }

      res.send(response_data);
    } else {
      res.send({
        success: false,
        message: "로그인에 실패하였습니다.",
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "서버 오류로 로그인에 실패하였습니다.",
    });
  }
};

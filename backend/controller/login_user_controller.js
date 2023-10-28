const { Users, CafeDetails, CollectorDetails } = require("../model");

// 로그인
module.exports.login_user_controller = async (req, res) => {
  //

  // 비밀번호 암호화 필요
  const { login_id, login_password } = req.body;

  try {
    const login_user_info = await Users.findOne({
      where: { login_id, login_password },
      attributes: ["user_type", "user_name",],
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
    }).then((v) => {
      // 데이터가 없을 때 (null)
      if (!v) {
        return;
      }

      data = v.get({ plain: true });

      if (data.user_type === "Cafe") {
        const { user_type, user_name, wallet_address, CafeDetail } = data;
        return {
          user_type,
          user_type,
          user_name,
          wallet_address,
          ...CafeDetail,
        };
      }

      if (data.user_type === "Collector") {
        const { user_type, user_name, wallet_address, CollectorDetail } = data;
        return {
          user_type,
          user_type,
          user_name,
          wallet_address,
          ...CollectorDetail,
        };
      }
    });

    // 데이터가 없을 때 (null)
    if (!login_user_info) {
      res.send({ success: false, message: "로그인에 실패하였습니다." });
      return;
    }

    res.send({
      success: true,
      message: "로그인에 성공하였습니다.",
      data: login_user_info,
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "로그인에 실패하였습니다.",
    });
  }
};

const { CollectionRecords } = require("../model");
const { Users } = require("../model");
const { CafeDetails } = require("../model");
module.exports.cafe_emission_page_controller = async (req, res) => {
  const wallet_address = req.params.wallet_address;
  console.log(req.params);

  try {
    // 먼저 wallet_address를 이용해 해당 유저의 user_id를 조회합니다.
    const user = await Users.findOne({
      where: { wallet_address: wallet_address },
    });

    // 해당 wallet_address를 가진 유저가 없다면 404 오류를 반환합니다.
    if (!user) {
      return res
        .status(404)
        .json({ message: "해당 지갑 주소를 가진 유저를 찾을 수 없습니다." });
    }
    console.log(user.user_id);
    const user_id = user.user_id;
    const cafe = await CafeDetails.findOne({
      where: { user_id: user_id },
    });
    console.log(cafe.cafe_id);
    const cafe_id = cafe.cafe_id;
    // user_id를 이용해 CollectionRecords에서 필요한 값을 조회합니다.
    const records = await CollectionRecords.findAll({
      where: { cafe_id: cafe_id },
      attributes: [
        "coffee_amount",
        "coffee_status",
        "reward_amount",
        "reward_status",
        "updated_at",
      ],
      raw: true,
    });

    if (records && records.length > 0) {
      res.send(records);
    } else {
      res.status(404).json({ message: "나의 배출 목록이 없습니다." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "나의 배출 목록 조회에 실패하였습니다." });
  }
};

const { CollectionRecords } = require("../model");

module.exports.cafe_emission_page_controller = async (req, res) => {
  const wallet = req.params.wallet_address;

  const data = await CollectionRecords.findAll({
    where: {
      wallet_address: wallet,
    },
    attributes: [
      "coffee_amount",
      "coffee_status",
      "company_name",
      "collection_date",
      "collector_name",
      "reward_amount",
      "reward_status",
    ],
  });

  if (data) {
    res.send(data);
  } else {
    res.status(500).json({ message: "나의 배출 목록 조회에 실패하였습니다." });
  }
};

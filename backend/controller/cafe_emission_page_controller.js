const { CollectionRecords } = require("../model");
const { CollectorDetails } = require("../model");
module.exports.cafe_emission_page_controller = async (req, res) => {
  // const wallet = req.params.wallet_address;
  const wallet_address = req.params.wallet_address;
  console.log(req.params);
  const records = await CollectionRecords.findAll({
    where: { wallet_address: wallet_address },
    attributes: [
      "coffee_amount",
      "coffee_status",
      "collection_date",
      "reward_amount",
      "reward_status",
      "collector_id",
    ],
    raw: true,
  });
  console.log(records);
  if (records && records.length > 0) {
    for (let record of records) {
      const collector = await CollectorDetails.findOne({
        where: { collector_id: record.collector_id },
        attributes: ["company_name", "collector_name"],
        raw: true,
      });

      if (collector) {
        record.company_name = collector.company_name;
        record._name = collector.collector_name;
      }
    }
  }

  if (records.data) {
    res.send(records.data);
  } else {
    res.status(500).json({ message: "나의 배출 목록 조회에 실패하였습니다." });
  }
};

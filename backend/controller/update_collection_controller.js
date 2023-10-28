const { CollectionRecords, CafeDetails } = require("../model");

module.exports.update_collection_controller = async (req, res) => {
  const {
    record_id,
    company_name,
    cafe_id,
    cafe_name,
    coffee_amount,
    coffee_status,
    collection_date,
  } = req.body;
  console.log(req.body);
  try {
    // 데이터베이스 업데이트 로직
    const records = await CollectionRecords.update(
      {
        cafe_name: cafe_name,
        coffee_amount: coffee_amount,
        coffee_status: coffee_status,
        collection_date: collection_date,
        reward_status: "수거완료",
      },
      {
        where: { record_id: record_id }, // cafe_name을 Primary Key 혹은 Unique Key로 사용하지 않는다면 다른 방법으로 조회 조건을 정해야 합니다.
      }
    );

    const total_emissions_data = await CafeDetails.findOne({
      where: { cafe_id: cafe_id },
      attributes: ["total_emissions"],
      raw: true,
    });

    const total_emissions =
      total_emissions_data.total_emissions + coffee_amount;

    await CafeDetails.update(
      {
        total_emissions: total_emissions,
      },
      {
        where: { cafe_id: cafe_id }, // cafe_name을 Primary Key 혹은 Unique Key로 사용하지 않는다면 다른 방법으로 조회 조건을 정해야 합니다.
      }
    );

    console.log("수거 입력이 완료되었습니다.");
  } catch (error) {
    res.status(500).json({ status: "FAIL", error: error.message });
  }
};

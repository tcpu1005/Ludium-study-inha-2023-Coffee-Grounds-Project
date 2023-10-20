const { CollectionRecords } = require("../model");
const { CafeDetails } = require("../model");
const { CollectorDetails } = require("../model");

module.exports.members_cafe_collection_controller = async (req, res) => {
  const { coffee_amount, coffee_status, cafe_id, cafe_name } = req.body;

  console.log(req.body);

  try {
    // 유효성 검사
    if (!coffee_amount || !coffee_status) {
      console.log("FAIL");
      console.log("양 혹은 질 중 입력이 되질 않았습니다.");
      // return res.status(400).json({ message: "" });
    } else {
      const created_coffee = await CollectionRecords.create({
        cafe_id,
        cafe_name,
        coffee_amount,
        coffee_status,
        reward_status: "수거 요청",
      });
      console.log("배출 입력이 완료되었습니다.");
    }
    //커피박 양과 질 CollectionRecords에 생성
  } catch (error) {
    console.error(error);
  }
  // 응답 보내기
  // res.status(200).json({ message: "Data successfully recorded." });
};

const { CollectionRecords } = require("../model");
const { Op } = require("sequelize");
module.exports.fetch_collections_controller = async (req, res) => {
  try {
    const collections = await CollectionRecords.findAll({
      where: {
        reward_status: "수거요청", // '수거 요청' 및 '수거 완료' 상태인 데이터 모두 조회
      },
      order: [
        ["coffee_amount", "DESC"], // 배출 양이 많은 순서로 정렬
        ["updated_at", "DESC"], // 최신순으로 정렬
      ],
    });

    return res.send({
      message: "수거 요청 상태인 수거 목록 조회에 성공하였습니다.",
      data: collections,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.send({
      message: "수거 요청 상태인 수거 목록 조회에 실패하였습니다.",
    });
  }
};

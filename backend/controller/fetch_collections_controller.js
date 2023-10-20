const CollectionRecords = require("../model");

module.exports.fetch_collections_controller = async (req, res) => {
  try {
    const { cafe_id } = req.params;
    console.log(cafe_id);
    // DB에서 cafe_id로 데이터 조회
    const collections = await CollectionRecords.findOne({
      where: {
        cafe_id: cafe_id,
      },
    });

    return res.send({
      message: "수거 목록 조회에 성공하였습니다.",
      data: collections,
    });
  } catch (error) {
    console.error("Error:", error); // 실제 에러 내용도 콘솔에 출력해 도움을 줍니다.
    return res.send({
      message: "수거 목록 조회에 실패하였습니다.",
    });
  }
};

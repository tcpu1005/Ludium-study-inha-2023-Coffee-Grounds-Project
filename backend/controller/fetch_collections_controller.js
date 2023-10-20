const CollectionRecords = require("path_to_CollectionRecords.js"); // CollectionRecords.js 파일의 경로를 정확하게 지정해야 합니다.

module.exports.fetch_collections_controller = async (req, res) => {
  try {
    const { record_id } = req.query;

    // DB에서 record_id로 데이터 조회
    const collections = await CollectionRecords.findOne({
      where: {
        record_id: record_id,
      },
    });

    return res.status(200).json({
      message: "수거 목록 조회에 성공하였습니다.",
      data: collections,
    });
  } catch (error) {
    console.error("Error:", error); // 실제 에러 내용도 콘솔에 출력해 도움을 줍니다.
    return res.status(400).json({
      message: "수거 목록 조회에 실패하였습니다.",
    });
  }
};

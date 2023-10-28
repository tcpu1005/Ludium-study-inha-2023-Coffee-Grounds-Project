const { CafeDetails } = require("../model");


module.exports.get_total_emission_fn = async (req, res) => {
  //

  try {
    const total_emission = await CafeDetails.findOne({
      where: { cafe_id: req.params.cafe_id },
      attributes: ["total_emission"],
      raw: true,
    }).then((v) => {
      if (v === null) {
        return;
      }
      return v.total_emission;
    });


    // 해당하는 유저가 없을 경우
    // 디폴트 값이 0이므로 구체적으로 명시해줘야 한다.
    if (total_emission === undefined) {
      res.send({ success: false, message: "해당하는 유저가 없습니다." });
      return;
    }


    res.send({ success: true, data: { total_emission }, message: "나의 총 배출 양 조회에 성공하였습니다." });
  } catch (error) {
    console.log(`get_total_emission_fn : ${error}`);
    res.send({ success: true, message: "나의 총 배출 양 조회에 실패하였습니다." });
  }
};

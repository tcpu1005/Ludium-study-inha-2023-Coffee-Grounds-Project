const { CafeDetails, CollectionRecords } = require("../model");


module.exports.get_my_emission_list_fn = async (req, res) => {
  //

  try {
    const my_emission_list = await CafeDetails.findOne({
      where: { cafe_id: req.params.cafe_id },
      attributes: [],
      include: [
        {
          model: CollectionRecords,
          attributes: [
            "updated_at",
            "coffee_status",
            "reward_status",
            "coffee_amount",
            "reward_amount",
          ],
        },
      ],
    }).then((v) => {
      //

      // 해당하는 유저가 없을 경우
      if (v === null) {
        return;
      }

      // 배출 건수가 아예 없을 경우 빈 배열이 된다.
      return v.CollectionRecords;
    });


    if (!my_emission_list) {
      res.send({ success: false, message: "해당하는 유저가 없습니다." });
      return;
    }


    res.send({ success: true, data: my_emission_list, message: "나의 배출 목록 조회에 성공하였습니다." });
  } catch (error) {
    console.error(`get_my_emission_list_fn : ${error}`);
    res.send({ success: false, message: "나의 배출 목록 조회에 실패하였습니다." });
  }
};

const { CafeDetails } = require("../model");
module.exports.total_emission_req_controller = async (req, res) => {
  const cafe_id = req.params.cafe_id;
  console.log(req.params);
  const records = await CafeDetails.findOne({
    where: { cafe_id: cafe_id },
  });
  console.log(records.total_emissions);
  const obj_total = { total_emissions: records.total_emissions };
  res.send(obj_total);
};

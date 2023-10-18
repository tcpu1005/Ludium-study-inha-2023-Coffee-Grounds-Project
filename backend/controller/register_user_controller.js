const Users = require("../model/Users");

const register_user_controller = async (req, res) => {
  const {
    login_id,
    login_password,
    user_name,
    cafe_name,
    address_si,
    address_gu,
    address_dong,
  } = req.body;
  try {
    const existingUser = await Users.findOne({ login_id });
    if (existingUser) {
      return res.status(409).send({ message: "이미 존재하는 ID입니다." });
    }
    const newUser = new Users({
      login_id,
      login_password, // TODO: 비밀번호 해시화 필요
      user_name,
      cafe_name,
      address_si,
      address_gu,
      address_dong,
    });

    await newUser.save();
    res.status(201).send({ message: "회원 가입에 성공하였습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "회원 가입에 실패하였습니다." });
  }
};

module.exports = {
  register_user_controller,
};

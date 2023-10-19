import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [userData, setUserData] = useState({
    login_id: "",
    login_password: "",
    user_name: "",
    cafe_name: "",
    address_si: "",
    address_gu: "",
    address_dong: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("/api/v1/members/cafe", userData);
      console.log(response.data);
      // TODO: 리덕스에 응답 데이터 저장
    } catch (error) {
      console.error("회원가입 에러:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login_id"
        value={userData.login_id}
        onChange={handleChange}
        placeholder="Login ID"
      />
      <input
        type="password"
        name="login_password"
        value={userData.login_password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="text"
        name="user_name"
        value={userData.user_name}
        onChange={handleChange}
        placeholder="User Name"
      />
      <input
        type="text"
        name="cafe_name"
        value={userData.cafe_name}
        onChange={handleChange}
        placeholder="cafe_name"
      />
      <input
        type="text"
        name="address_si"
        value={userData.address_si}
        onChange={handleChange}
        placeholder="address_si"
      />
      <input
        type="text"
        name="address_gu"
        value={userData.address_gu}
        onChange={handleChange}
        placeholder="address_gu"
      />
      <input
        type="text"
        name="address_dong"
        value={userData.address_dong}
        onChange={handleChange}
        placeholder="address_dong"
      />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default RegisterForm;

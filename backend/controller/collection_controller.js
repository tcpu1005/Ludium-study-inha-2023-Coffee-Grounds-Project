const { CollectionRecords } = require("../model");
const { Op } = require("sequelize");


module.exports.register_emission_fn = async (req, res) => {
    //

    try {
        const created_coffee = await CollectionRecords.create({
            ...req.body,
            reward_status: "수거요청",
        });
        res.send({ success: true, message: "배출 입력에 성공하였습니다." });
    } catch (error) {
        console.log(`register_emission_fn : ${error}`);
        res.send({ success: false, message: "배출 입력에 실패하였습니다." });
    }
};


module.exports.get_collections_fn = async (req, res) => {
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


module.exports.register_collection_fn = async (req, res) => {
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


module.exports.get_my_collections_fn = async (req, res) => {
    try {
        const collections = await CollectionRecords.findAll({
            where: {
                reward_status: "수거완료", // '수거 요청' 및 '수거 완료' 상태인 데이터 모두 조회
            },
            order: [
                ["coffee_amount", "DESC"], // 배출 양이 많은 순서로 정렬
                ["updated_at", "DESC"], // 최신순으로 정렬
            ],
        });

        return res.send({
            message: "수거 완료 상태인 수거 목록 조회에 성공하였습니다.",
            data: collections,
        });
    } catch (error) {
        console.error("Error:", error);
        return res.send({
            message: "수거 완료 상태인 수거 목록 조회에 실패하였습니다.",
        });
    }
};


module.exports.register_reward_fn = async (req, res) => {
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

        console.log("보상 완료 상태 변경이 완료되었습니다.");
    } catch (error) {
        res.status(500).json({ status: "FAIL", error: error.message });
    }
};


module.exports.get_completed_reward_fn = async (req, res) => {
    try {
        const collections = await CollectionRecords.findAll({
            where: {
                reward_status: "보상완료", // '수거 요청' 및 '수거 완료' 상태인 데이터 모두 조회
            },
            order: [
                ["coffee_amount", "DESC"], // 배출 양이 많은 순서로 정렬
                ["updated_at", "DESC"], // 최신순으로 정렬
            ],
        });

        return res.send({
            message: "보상 완료 상태인 수거 목록 조회에 성공하였습니다.",
            data: collections,
        });
    } catch (error) {
        console.error("Error:", error);
        return res.send({
            message: "보상 완료 상태인 수거 목록 조회에 실패하였습니다.",
        });
    }
};
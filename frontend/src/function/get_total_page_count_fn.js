// 목록 개수가 131개일 경우 14개
export const get_total_page_count_fn = (list, page_unit) => {
    //

    const page_count_temp = list.length / page_unit;
    const is_int = page_count_temp === parseInt(page_count_temp);
    if (!is_int) {
        return parseInt(page_count_temp) + 1;
    }
    return page_count_temp;
};
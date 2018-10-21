
// 提供商品信息数据
const indent_list = () => {

    return  $.ajax({
                url: '/api/entry/indent_list',
                success: (res) => {
                    return res;
                }
            })
}
export default indent_list


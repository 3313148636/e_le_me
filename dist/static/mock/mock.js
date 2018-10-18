

const list = require('./list.json');
const entry_list = require('./entry_list.json');

module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        list: list,
        entry_list : entry_list
    }
}
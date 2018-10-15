

import shoplist_template from '../views/shoplist/shoplist.html';
import shoplist_models from '../models/shoplist_models.js';

const render = () => {

    var data = shoplist_models.shop_list();

    let _template = Handlebars.compile(shoplist_template);
    let _html = _template({shoplist:data});

    $('#shop_list').html(_html);    
}
export default {
    render
}


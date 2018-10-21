import indent_detail_template from '../views/indent/indent_detail.html';
import indent_detail_list from '../models/indentdetail_models';
import indent_controller from './indent_controller';

const render = async(path) => {
    
    $(window).scrollTop(0)

    let _template = Handlebars.compile(indent_detail_template);
    var data = await indent_detail_list(path);

    let _html = _template({shoplist:data});

    document.querySelector('#root').innerHTML = _html;

    $('.header img').on('tap',function(){
        indent_controller.render();
    })
}
export default {
    render
}
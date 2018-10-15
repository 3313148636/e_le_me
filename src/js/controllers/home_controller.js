
//home视图的控制器
import home_template from '../views/home/home.html';

import entries_controller from './entries_controller';

// 负责将home视图模板渲染在对应的地方
const render = () => {
    
    document.querySelector('#root').innerHTML = home_template;
    entries_controller.render();
}
export default {
    render
}

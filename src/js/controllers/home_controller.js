
//home视图的控制器
import home_template from '../views/home/home.html';

// 负责将home视图模板渲染在对应的地方
const render = () => {

    document.querySelector('#root').innerHTML = home_template;
    
}
export default {
    render
}

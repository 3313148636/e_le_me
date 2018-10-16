
import mine_template from '../views/mine/mine.html';
import footer_controller from './footer_controller';

const render = () =>{
    
    document.querySelector('#root').innerHTML = mine_template;
    footer_controller.render();
}
export default {
    render
}
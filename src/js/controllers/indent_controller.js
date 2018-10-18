
import indent_template from '../views/indent/indent.html';
import footer_controller from './footer_controller';
const render = () => {
    
    document.querySelector('#root').innerHTML = indent_template;
    footer_controller.render();
}
export default {
    render
}
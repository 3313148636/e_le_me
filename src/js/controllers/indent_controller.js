
import indent_template from '../views/indent/indent.html';

const render = () => {
    
    document.querySelector('#root').innerHTML = indent_template;
    
}
export default {
    render
}
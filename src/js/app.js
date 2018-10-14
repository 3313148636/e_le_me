
import home_controller from './controllers/home_controller';
import shoplist_controller from './controllers/shoplist_controller';

new Promise((resolve,reject)=>{
    home_controller.render();
    resolve();
}).then(()=>{
    shoplist_controller.render();
})
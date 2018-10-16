
import {routes} from './route'

class Router {
    constructor({ initial }){
        this.routes = routes ; //路由表
        this.initial = initial || '#/home'; // 默认路由
    }
    init(){
        this.initialHash();
        this.listenHashChange();
    }

    initialHash () { // 初始化hash值
        // location.hash
        if ( !location.hash ){
            location.hash = this.initial
        };
        // this.currentUrl = location.hash;
    }

    refresh () { // 根据当前的路径 来 切换路由
        let hash = location.hash;

        if ( !this.routes[hash] ) { // 路由表里没有配置这个路由
            // 回到默认路由
            location.hash = this.initial;
            return false;
        }
        console.log(1);
        this.routes[hash].render();
        
    }

    listenHashChange () { // 监听hash值变化的
        window.addEventListener('load', this.refresh.bind(this));
        // 当hash值变化的时候此事件会执行
        window.addEventListener('hashchange', this.refresh.bind(this));
    }
}

export default Router;
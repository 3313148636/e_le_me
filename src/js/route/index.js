
import {routes} from './route'

class Router {
    constructor({ initial }){
        this.routes = routes ; //路由表
        this.initial = initial; // 默认路由
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

    switch (path) { // 切换路由的方法，方便在js事件等场景调用，需要切换模式的话在这里切换就ok
        location.hash = path;
    }

    refresh () { // 根据当前的路径 来 切换路由
        let hash = location.hash;
        if ( !this.routes[hash] ) { // 路由表里没有配置这个路由
            // 回到默认路由
            location.hash = this.initial;
            return false;
        }
        this.routes[hash].render();
        this.switchTab();
    }


    switchTab () {
        // 要求需要根据路由切换而切换active类名的元素，必须加上nav-link类名，并且加上path属性
        $('#footer a').each(function (item){
            if ( $(this).attr('path') === location.hash ) {
                $(this).addClass('svg_span');
            }else {
                $(this).removeClass('svg_span');
            }
        })
    }

    listenHashChange () { // 监听hash值变化的
        window.addEventListener('load', this.refresh.bind(this));
        // 当hash值变化的时候此事件会执行
        window.addEventListener('hashchange', this.refresh.bind(this));
    }

}

export default Router


//home视图的控制器
import shoplist_template from '../views/shoplist/shoplist.html';
import shoplist_models from '../models/shoplist_models.js';
import BScroll from 'better-scroll';

const render = async () => {
    
    let _template = Handlebars.compile(shoplist_template);

    var data = await shoplist_models.shop_list();
    let _html = _template({shoplist:data.items});

    $('ul.shoplist').html(_html); 
    //查看活动
    $('li.item').bind('click',function(e){
        if(e.target.nodeName === 'I'){
            var display_status = $(this).find('.third-l').css('display');
            if(display_status === 'none'){
                $(this).find('.third-l').css('display','block');
                var span_list = $(this).find('.third-l .third-l_b span:nth-of-type(1)');
                
                for(var i=0; i<span_list.length; i++){
                    var color = $(span_list[i]).attr('color');
                    $(span_list[i]).css('background',color);
                }
            }else{
                $(this).find('.third-l').css('display','none');
            }
        }
    })

    let scroll = new BScroll('#root',{
        probeType:2
    })
    //屏幕滚动事件
    scroll.on('scroll',({x,y})=>{
        if(y>0){
            scroll.scrollTo(0,0);
        }
    })
}
export default {
    render
}

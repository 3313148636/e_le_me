

import shoplist_template from '../views/shoplist/shoplist.html';
import shoplist_models from '../models/shoplist_models.js';

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

    var Y = $('#root').height(); 
    var flag = true;
    $(window).on('scroll',function(){
        var scroll_y = $(window).scrollTop();
        if(scroll_y > Y-1350 && flag == true){
            flag = false;
            $('.loading').css('display','flex');
            setTimeout(()=>{
                $('.loading').css('display','none');
                $('ul.shoplist').html(_html+$('ul.shoplist').html());
                Y = $('#root').height();
                flag = true;
            },2000)
        }
    })

    
}
export default {
    render
}

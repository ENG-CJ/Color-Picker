
$('document').ready(()=>{
    $('#color-range').on('input change',()=>{
        let $color_value=$('.color-range');
        $('body').css({
            background : $color_value.val()
        })
        $('.container').css({
            background : $color_value.val()
            
        })
        if($color_value.val()<='#242424'){
            $('.container').css('color','white')
        }else{
            $('.container').css('color','black')
        }

        // change the span value
        let span=$('.hash-tags')
        span.text($color_value.val());
        
       

    })


    
})
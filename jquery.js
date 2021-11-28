
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
            $('.contain er').css('color','black')
        }

        // change the span value
        let span=$('.hash-tags').val().html('<p>This is Text in Paragraph</p>')
        span.text($color_value.val())
   

        // adding span value
        let __span__=$('.ads');
        __span__.css({
            '':'',
            background : $color_value.val(),
            'color' : '#1b1b1b',
            'padding-bottom' : '20px',
            'margin-top' : '30px',
            'linear-gradient' : 'rgba(87,75,87,0.8)',
            'box-shadow' : 'rgba(7)'
        })

        
    })
})
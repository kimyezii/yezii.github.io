// head안에 jQuery를 넣었다면 
// html보다 jQuery를 먼저 읽어들여서 jQuery가 휘발될수있으니
// $(function(){~ 을 쓴다.
//  ㄴhtml을 먼저 읽고 script를 읽어라.

$(function(){
    // scroll change download
    $(window).scroll(function(){
        if($(window).scrollTop() > 500) {
            $('.download').addClass('active')
        }
        else {
            $('.download').removeClass('active')
        }
    })

    // sitemap accordion
    $('.link-item-title').click(function(){
        // $(this).next().slideToggle()

        $(this).next().slideDown()
        $(this).parent().siblings().children('.link-item-content').slideUp()

        $(this).addClass('active')
        $(this).parent().siblings().children('.link-item-title').removeClass('active')
    })
})
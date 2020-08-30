import { mySwiper3,mySwiper4 } from '../js/lib/auto.js';
import $ from '../js/lib/jquery.js';
$('header').load('../html/header.html');
$('#fixNav').load('../html/fixNav.html');
$(function () {
    $('footer').load('../html/footer.html');

    let movebox = $('.mask'),
        bigpicture = $('.bigpicture'),
        small = $('.product_images'),
        big = $('.loupe'),
        
        select = $('.s1');

   
    small.on('mouseover', function () {
        movebox.addClass('show');
        big.addClass('show');
        // bz1.each(function(i) {
        //     if($(bz1[i]).parent().hasClass("swiper-slide-duplicate-active")) {
        //         console.log($(bz1[i]));
        //         $(bz1[i]).parent().next().children.addClass('bz2').parent().siblings().children().removeClass('bz2');
        //     }
        // })

        // movebox.css({
        //     width: (small.width() * big.width() / bigpicture.width()) + 'px',
        //     height: (small.height() * big.height() / bigpicture.height()) + 'px'
        // })

        small.on('mousemove', function (ev) {


            let top = ev.pageY - small.offset().top - movebox.height() / 2;
            let left = ev.pageX - small.offset().left - movebox.width() / 2;

            let ratio = bigpicture.width() / small.width();

            if (top <= 0) {
                top = 0;
            } else if (top >= small.height() - movebox.height() -200) {
                top = small.height() - movebox.height()-200 - 2;
            }

            if (left <= 0) {
                left = 0;
            } else if (left >= small.width() - movebox.width() ) {
                left = small.width() - movebox.width() - 2;
            }
            movebox.css({
                'top': top + 'px',
                'left': left + 'px'
            })
            bigpicture.css({
                top: ratio * -top + 'px',
                left: ratio * -left + 'px'
            });

        });
        small.on('mouseout', function () {
            movebox.removeClass('show');
            big.removeClass('show');
        });
    })

})
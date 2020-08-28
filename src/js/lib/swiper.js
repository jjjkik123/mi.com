import Swiper from '../lib/swiper-bundle.js';
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    autoplay: true,
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }

    // 如果需要滚动条

})
// var mySwiper = new Swiper('.swiper-container', {
//     // effect: 'fade',
//     // fadeEffect: {
//     //     crossFade: true,
//     // }
// });

export { mySwiper };
/**
 * Created by 吕堃鹏 on 2016/12/20 0020.
 */
var desW = 640;
var winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize = winW / desW * 100 + 'px';
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {
        var curIndex = swiper.activeIndex;
        var slides = swiper.slides;
        [].forEach.call(slides, function (item, index) {
            item.id = "";
            if (index == curIndex) {
                switch (index) {
                    case 0:
                        item.id = "page" + (slides.length - 2);
                        break;
                    case slides.length - 1:
                        item.id = "page1";
                        break;
                    default :
                        item.id = "page" + index;
                }
            }
        })
    }
});
~function () {
    var $msg = $('.mail');
    var $we = $('.QRCode');
    var $weImg = $('.weImg');
    var $btn = $('.QRBtn');
    $msg.tap(function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            alert('微信浏览器暂不支持发送邮件，请将本链接放入浏览器中打开')
        }
    });
    $weImg.tap(function () {
        $('.slide5').css('background-color', 'rgba(3,3,3,0.5)');
        $('.slide5 #context img').css('opacity', 0);
        $we.css('display', 'block')

    });
    $btn.tap(function () {
        $we.css('display', 'none');
        $('.slide5').css('background-color', '#ffffff');
        $('.slide5 #context img').css('opacity', 1);
    })
}();
var music = document.querySelector(".music");
var beyond = document.querySelector("#beyond");
window.setTimeout(function () {
    beyond.play();
    music.style.opacity = 1;
    music.className = "music musicMove";
}, 1000);
music.addEventListener("click", function () {
    if (beyond.paused) {
        beyond.play();
        music.className = "music musicMove";
    } else {
        beyond.pause();
        music.className = "music";
    }
}, false);
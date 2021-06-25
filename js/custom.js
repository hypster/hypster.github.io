/**
 * Created by septem
 */

function rate(rateList, list) {
    for (var i = 0, ele; ele = list[i]; i++) {
        var $container = $('<div class="rate"></div>');
        var rate = rateList[i];
        //pop up rating pattern
        for (var j = 0; j < rate; j++) {
            $('<span class="filled"></span>')
                .appendTo($container);
        }
        for (var j = 0; j < 10 - rate; j++) {
            $('<span class="hollow"></span>')
                .appendTo($container);
        }
        $container.appendTo(list[i]);
    }
}

//equal height
function calcHeight() {
    // $('.wrap').outerHeight($('.col-md-7').outerHeight() + 200);
}

//rearrange dom based on media query
function reArrange(){
    $('.detail').before($('.skills'));
}
function undoArrange(){
    $('aside').append($('.portrait')).append($('.skills'));
}

$(function () {

//pop up rating
    var aH3 = $('.design').find('h3');
    rate([7, 7, 6, 6], aH3);
    var aH3 = $('.coding').find('h3');
    rate([9, 8, 7, 7, 9, 9], aH3);
    var aH3 = $('.language').find('h3');
    rate([10, 10, 8, 6], aH3);
//animate the portrait
    $(document.createElement('div')).addClass('mask')
        .appendTo($('.portrait'))
        .on('mouseover', function (e) {
            $('.portrait').addClass('animating');
            $('.portrait').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
                $('.portrait').removeClass('animating');
            });
        });
    //make left and right height equal
    calcHeight();
    $(window).resize(function (e) {
        calcHeight();
    });

});//whole function end

enquire.register("screen and (max-width:767px)",{
    match:reArrange,
    unmatch:undoArrange
});

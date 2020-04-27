(function () {
    const mainImg = $('.main-img');

    const thumnItemImg = $('.thumb-item-img');

    thumnItemImg.each(function () {
        $(this).on('mouseover', function () {
            var imgSrc = $(this).attr('src');
            var convertSrc = imgSrc.replace('_small', '_large');

            mainImg.attr('src', convertSrc);

            $(this).removeClass('is-active');
            $(this).addClass('is-active');
        });
    });
})()

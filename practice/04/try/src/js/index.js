(function () {
    const button = $('.button');

    $.each(button, function () {
        $(this).click(function () {
            $(this).next().toggleClass('is-active');
        });
    });
})()

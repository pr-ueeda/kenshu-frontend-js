(function () {
    const overlay = $('#modal-overlay');
    const content = $('#modal-content');

    function toggles() {
        overlay.toggleClass('is-active');
        content.toggleClass('is-active');
    }

    $('#button').click(function () {
        console.log('click')
        toggles();
    });

    overlay.click(function () {
        toggles();
    });

    $('#modal-close').click(function () {
        toggles();
    });
})()

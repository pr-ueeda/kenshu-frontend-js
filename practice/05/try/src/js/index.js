(function () {
    var input = $('#input');
    var text = $('#text');
    var searchText = 'yes';

    input.on('keyup', function () {
        if ($(this).val().indexOf(searchText) >= 0) {
            text.text($(this).val());
        } else {
            text.text('');
        }
    });
})()

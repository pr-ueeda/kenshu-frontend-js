(function () {
    var form = $('#form');

    var name = form.find('input[name=name]');
    var mail = form.find('input[name=mail]');
    var gender = form.find('input[name=gender]');
    var age = form.find('select[name=age]');
    var term = form.find('input[name=term]');

    var error = $('#error');
    
    function isInputCheck() {
        if (name.val() === '') {
            return false;
        } else if (mail.val() === '') {
            return false;
        } else if (!gender.prop('checked')) {
            return false;
        } else if (age.val() === '') {
            return false;
        } else if (!term.prop('checked')) {
            return false;
        } else {
            return true;
        };
    };

    form.on('submit', function (pageReload) {
        pageReload.preventDefault();

        if (isInputCheck()) {
            form[0].submit();
        } else {
            error.addClass('is-active');
        };
    });

})()

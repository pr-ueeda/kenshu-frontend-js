(function () {
    var inputName = $('input[name="name"]');
    var inputGender = $('input[name="gender"]');
    const button = $('#button');
    const name = $('#name-text');
    const gender = $('#gender-text');
    const result = $('#text-wrapper');

    button.on('click', function () {
        name.text(inputName.val());
        inputGender.each(function () {
            if ($(this).prop('checked')) {
                gender.text($(this).val());
            }
        })
        result.addClass('is-active');
    });
})()

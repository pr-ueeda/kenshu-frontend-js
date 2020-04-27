(function () {
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    var list = $('#list');

    function createItem(_json) {
        var element = $('<li></li>');
        element.append($('<h2>' + _json.title + '</h2>'));
        element.append($('<p>' + _json.body + '</p>'));
        return element;
    }

    function insertJsonToElement(_json) {
        $.each(_json, function (_, item) {
            list.append(createItem(item));
        })
    }

    $.ajax({
        url: URL,
        type: "GET"
    }).done(function (_json) {
        insertJsonToElement(_json);
    }).fail(function (error) {
        throw new Error(error);
    })
})()

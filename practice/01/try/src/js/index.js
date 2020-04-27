(function () {
    var object = {
        company_id: 1234,
        company_name: '会社名'
    };

    var object2 = {
        article_id: 9876,
        article_title: 'タイトル'
    };

    console.log(object);
    console.log(object2);

    var mergeObjects = $.extend({}, object, object2);

    console.log(mergeObjects);
})()

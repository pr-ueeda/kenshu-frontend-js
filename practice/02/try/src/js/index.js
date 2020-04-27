(function () {
    var button = document.getElementById('button');
    var textType = document.getElementsByClassName('text--type')[0];
    var textClass = document.getElementsByClassName('text--class')[0];

    button.addEventListener('click', function () {
        textType.textContent = button.getAttribute('data-type');
        textClass.textContent = button.getAttribute('class');
    });
})()

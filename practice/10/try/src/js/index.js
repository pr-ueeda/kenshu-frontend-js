(function() {
    /*
    トップに表示されているitemからnextとpreviousのanimationを付け加えるために
    CSSを操作する関数をそれぞれ作る。
    previousの要素がない場合は子要素に前にitem配列の要素-1した値を追加
    nextの要素がない場合は子要素の最後にitem配列の要素0を追加
    アニメーション管理用flag,classにis-transitionを追加するコードを用意
     */

    var elements = {
        prev: $('.prev'),
        next: $('.next'),
        list: $('.list'),
        items: $('.item')
    };

    var widthValues = {
        list: elements.list.outerWidth(),
        item: elements.items.outerWidth()
    };

    var isTransitioning = {
        prev: false,
        next: false
    };

    // それぞれボーダーの外側までの値を取得しCSSへ
    function slidePrev () {
        elements.list.addClass('is-transition');
        elements.list.css({'margin-left': widthValues.item + 'px'});
    };

    function slideNext () {
        elements.list.addClass('is-transition');
        elements.list.css({'margin-left': '-' + widthValues.item + 'px'});
    };

    // それぞれスライド後のCSSを処理
    function slidePrevAfterTransition () {
        elements.list.removeClass('is-transition');
        elements.list.prepend(elements.items[elements.items.length - 1]);
        elements.list.css({'margin-left': '0px'});
        elements.items = $('.item');
        isTransitioning.prev = false;;
    };

    function slideNextAfterTransition () {
        elements.list.removeClass('is-transition');
        elements.list.append(elements.items[0]);
        elements.list.css({'margin-left': '0px'});
        elements.items = $('.item');
        isTransitioning.next = false;
    };

    // previousとnextのスライド発火時の挙動
    function firingSlide() {
        elements.prev.on('click', function() {
            isTransitioning.prev = true;
            slidePrev();
            elements.list.on('transitionend', () => {
                if(!isTransitioning.prev) return false;
                slidePrevAfterTransition();
            });
        });
        elements.next.on('click', function() {
            isTransitioning.next = true;
            slideNext();
            elements.list.on('transitionend', () => {
                if(!isTransitioning.next) return false;
                slideNextAfterTransition();
            });
        });
    };

    function addInitialStyleToList () {
        elements.list.css({'left': '-' + widthValues.list +'px'});
    };

    // items要素を複製し、listに挿入
    function prependAllItems () {
        elements.items.clone().prependTo(elements.list);
        addInitialStyleToList();
    };


    prependAllItems();
    firingSlide();
})()

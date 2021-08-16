$('a[href^="#"]').on('click', function() { // #から始まるURLがクリックされた時
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
  });
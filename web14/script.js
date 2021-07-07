$(function () {
  // アコーディオンメニューのラベルがクリックされた場合
    $('.ac-parent').on('click', function () {

    // ac-parentクラスの次の要素（ac-childクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();

  //openクラスをつける
    $(this).toggleClass("open");

  //クリックされていないac-parentのopenクラスを取る
    // $('.ac-parent').not(this).removeClass('open');
  // 一つ開くと他は閉じるように
    // $('.ac-parent').not($(this)).next('.ac-child').slideUp();
  });
});

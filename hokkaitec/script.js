$(function(){
	$(window).scrollTop(-1);// 1pxだけ下に自動スクロールさせる
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top + 0;//要素より0px下
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 0){
				$(this).addClass('scrollin');// 画面内に入ったらscrollinというクラス名を追記
			}
      // else{
      // $(this).removeClass('scrollin');// 画面外に出たらscrollinというクラス名を外す
      // }
		});
	});
});

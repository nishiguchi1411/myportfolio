//メインのスワイパー
(function() {
  let speed = 8000;
  const mySwiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    speed: speed,
    spaceBetween: 10,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
  let getTranslate;
  document.querySelectorAll('.swiper').forEach(function(e){
    e.addEventListener('mouseover', function () {
      getTranslate = mySwiper.getTranslate();
      mySwiper.setTranslate(getTranslate);
      mySwiper.setTransition(0);
    });
    e.addEventListener('mouseout', function () {
      getTranslate = mySwiper.getTranslate();
      let getSlideWidthMgLeft = document.querySelector('.swiper-slide-active').style.marginLeft;
      if (getSlideWidthMgLeft) {
        getSlideWidthMgLeft = parseFloat(getSlideWidthMgLeft);
      } else {
        getSlideWidthMgLeft = 0;
      }
      let getSlideWidthMgRight = document.querySelector('.swiper-slide-active').style.marginRight;
      if (getSlideWidthMgRight) {
        getSlideWidthMgRight = parseFloat(getSlideWidthMgRight);
      } else {
        getSlideWidthMgRight = 0;
      }
      let getSlideWidth = document.querySelector('.swiper-slide-active').offsetWidth;
      let getTotalSlideWidth = getSlideWidthMgLeft + getSlideWidthMgRight + getSlideWidth;
      let diff = - getTotalSlideWidth - (getTranslate % getTotalSlideWidth);
      let diffTime = diff / -getSlideWidth;
      mySwiper.setTranslate(getTranslate + diff);
      mySwiper.setTransition(speed * diffTime);
    });
  });
})();





//spスタイルのスワイパー





//drop-apple demo
function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }

    function bounce(timeFraction) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return  (
            -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          );
        }
      }
    }


        // 落下フラグの初期化
let dropped1 = false;
let dropped2 = false;
let dropped3 = false;


 clickArea.onmouseover = function() {
  if (dropped1) return; // すでに落下済みなら何もしない
  dropped1 = true;

  let to = field.clientHeight - ball.clientHeight;

  animate({
    duration: 1800,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball.style.top = to * progress + 'px';
    }
  });
};




clickArea2.onmouseover = function() {
  if (dropped2) return; // すでに落下済みなら何もしない
  dropped2 = true;

  let to = field2.clientHeight - ball2.clientHeight;

  animate({
    duration: 1800,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball2.style.top = to * progress + 'px';
    }
  });
};


clickArea3.onmouseover = function() {
  if (dropped3) return; // すでに落下済みなら何もしない
  dropped3 = true;

  let to = field3.clientHeight - ball3.clientHeight;

  animate({
    duration: 1800,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball3.style.top = to * progress + 'px';
    }
  });
};




// カレント表示
const links = document.querySelectorAll(".category-nav_item  a");

links.forEach(function (link) {
    if (link.href === location.href) {
        link.closest(".category-nav_item").classList.add("current");
    }
});





//ハンバーガーメニュー
$(".hamburger__box").click(function(){
    $(".hamburger__box").toggleClass("open");
    $(".header__menu-sp").toggleClass("nav-sp");
});


//要素をフェードインする処理
const showElements = () => {
  //フェードインする要素を全て取得
  const elements = document.querySelectorAll(".fadein");
  //ブラウザの高さの80%を計算
  const displayPos = window.innerHeight * 0.8;
  
  elements.forEach((element) => {
    //ブラウザの上から要素の上までの距離
    const elementPos = element.getBoundingClientRect().top;
    //要素がブラウザの下から20%の位置よりも上に到達したら実行する
    if(displayPos > elementPos) {
      //要素に「show」クラスを追加
      element.classList.add("show");
    }
  });
};

window.addEventListener("load", showElements);
window.addEventListener("scroll", showElements);



//ローディング画面
window.addEventListener('load' , () => {
  const loadingElement = document.querySelector('#loading');
  setTimeout(() => {
    loadingElement.classList.add('loaded');
  }, 1800);

});









jQuery(window).scroll(function() {
	let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
	let areaTop = jQuery("#footer").offset().top; // 対象エリアの上部の位置
	let areaBottom = areaTop + jQuery("#footer").innerHeight(); // 対象エリアの下部の位置

	if (scrollTop > areaTop && scrollTop < areaBottom) {
		jQuery(".header_wrapper a").addClass("transform"); // スクロールが対象エリアに入った場合
	} else {
		jQuery(".header_wrapper a").removeClass("transform"); // スクロールが対象エリアから出ている場合
	}
});
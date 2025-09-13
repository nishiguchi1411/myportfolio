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
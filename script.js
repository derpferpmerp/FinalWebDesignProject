function onKonamiCode(cb) {
  var input = '';
  var snek = '38384040373937396665';
  var key = '83786975';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input == key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}
var main = document.getElementsByName('html')
var children = document.getElementsByName('html.children')

var scale = Math.min(
  main.width / children.width,
  main.height / children.height
);

onKonamiCode(function () {
  window.open('https://www.dictionary.com/e/wp-content/uploads/2018/06/snek-5.jpeg', '_blank')

})
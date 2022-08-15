function showTop() {
  var showTop = document.body.scrollTop || document.documentElement.scrollTop;
  console.log("top", showTop);
}
function handle() {
  console.log(Date.now());
}
// window.onscroll = debounce(showTop, 200);
window.onscroll = debounce(showTop, 1000);
// window.onscroll = showTop;

(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

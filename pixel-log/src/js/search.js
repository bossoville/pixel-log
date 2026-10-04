// Live search: filters the posts on the page as you type.
(function () {
  var input = document.getElementById("search");
  if (!input) return;

  var posts = Array.prototype.slice.call(document.querySelectorAll("#feed .post"));
  var status = document.getElementById("search-status");
  var none = document.getElementById("no-results");

  function run() {
    var terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;

    posts.forEach(function (post) {
      var text = (post.getAttribute("data-search") || "").toLowerCase();
      var match = terms.every(function (t) { return text.indexOf(t) !== -1; });
      post.hidden = !match;
      if (match) shown++;
    });

    none.hidden = shown !== 0;
    status.textContent = terms.length
      ? shown + " of " + posts.length + " posts match"
      : "";
  }

  input.addEventListener("input", run);

  // Support links like /?q=coffee
  var q = new URLSearchParams(window.location.search).get("q");
  if (q) { input.value = q; run(); }
})();

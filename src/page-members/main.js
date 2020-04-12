require("normalize.css/normalize.css");
require("jquery/dist/jquery.min.js");
require("./page.css");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");

// ignore the warnings
var disqus_config = function () {
  this.page.url = "http://localhost:8080/members.html"; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = "/members.html"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://tempwish.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
// DON'T EDIT ABOVE THIS LINE
// ignore the warnings

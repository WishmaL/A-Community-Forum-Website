require("normalize.css/normalize.css");
// require('../css/main.css')
require("./page.css");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");

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

const axios = require("axios");
axios
  .get("http://localhost:3000/news")
  // .then((res) => console.log(res.data))
  .then((res) => showOutput1(res))
  .catch((err) => console.error(err));

function showOutput1(res) {
  let i;
  for (i = 0; i < 5; i++) {
    if (i == 0) {
      document.getElementById("title1").innerHTML = `${res.data[0].title}`;
      document.getElementById("newsbody1").innerHTML = `${res.data[0].title}`;
    } else if (i == 1) {
      document.getElementById("title2").innerHTML = `${res.data[1].title}`;
      document.getElementById("newsbody2").innerHTML = `${res.data[1].body}`;
    } else if (i == 2) {
      document.getElementById("title3").innerHTML = `${res.data[2].title}`;
      document.getElementById("newsbody3").innerHTML = `${res.data[2].title}`;
    } else if (i == 3) {
      document.getElementById("title4").innerHTML = `${res.data[3].title}`;
      document.getElementById("newsbody4").innerHTML = `${res.data[3].title}`;
    } else if (i == 4) {
      document.getElementById("title5").innerHTML = `${res.data[4].title}`;
      document.getElementById("newsbody5").innerHTML = `${res.data[4].title}`;
    }
  }
}

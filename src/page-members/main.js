require("normalize.css/normalize.css");
require("jquery/dist/jquery.min.js");
require("./page.css");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");
const axios = require("axios");

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

// adding a news

document.getElementById("post").addEventListener("click", updatenews1);

function updatenews1() {
  var name1 = document.getElementById("userName").value;
  var title1 = document.getElementById("newsTitle").value;
  var newsBody1 = document.getElementById("newsBody").value;
  axios
    .post("https://my-json-server.typicode.com/WishmaL/demo/news", {
      username: name1,
      title: title1,
      body: newsBody1,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  //   console.log('news is changed successfully');
}

// function showOutput(res) {
//   document.getElementById("res").innerHTML = `
//     <div class="card card-body mb-4">
//       <h5>Status: ${res.status}</h5>
//     </div>

//     <div class="card mt-3">
//       <div class="card-header">
//         Headers
//       </div>
//       <div class="card-body">
//         <pre>${JSON.stringify(res.headers, null, 2)}</pre>
//       </div>
//     </div>

//     <div class="card mt-3">
//       <div class="card-header">
//         Data
//       </div>
//       <div class="card-body">
//         <pre>${JSON.stringify(res.data, null, 2)}</pre>
//       </div>
//     </div>

//     <div class="card mt-3">
//       <div class="card-header">
//         Config
//       </div>
//       <div class="card-body">
//         <pre>${JSON.stringify(res.config, null, 2)}</pre>
//       </div>
//     </div>
//   `;
// }

// function updatenews1() {

//   let title1 = document.getElementById('title1');
//   let body1 = document.getElementById('body1');
//   let user1 = document.getElementById('user1');

//   axios
//     .patch('https://my-json-server.typicode.com/WishmaL/demo/news/1', {
//       title: title1,
//       body: body1,
//       user:user1
//     })
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
// }

// }

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

// document.getElementById("post").addEventListener("click", updatenews1);

function updatenews1() {
  var name1 = document.getElementById("userName").value;
  var title1 = document.getElementById("newsTitle").value;
  var newsBody1 = document.getElementById("newsBody").value;
  axios
    .patch("http://localhost:3000/news/1", {
      username: name1,
      title: title1,
      body: newsBody1,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
  console.log("topic 1 updated");
}

function updatenews2() {
  var name1 = document.getElementById("userName").value;
  var title1 = document.getElementById("newsTitle").value;
  var newsBody1 = document.getElementById("newsBody").value;
  axios
    .patch("http://localhost:3000/news/2", {
      username: name1,
      title: title1,
      body: newsBody1,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
  console.log("topic 2 updated");
}

function updatenews3() {
  var name1 = document.getElementById("userName").value;
  var title1 = document.getElementById("newsTitle").value;
  var newsBody1 = document.getElementById("newsBody").value;
  axios
    .patch("http://localhost:3000/news/3", {
      username: name1,
      title: title1,
      body: newsBody1,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
  console.log("topic 3 updated");
}

function updatenews4() {
  var name1 = document.getElementById("userName").value;
  var title1 = document.getElementById("newsTitle").value;
  var newsBody1 = document.getElementById("newsBody").value;
  axios
    .patch("http://localhost:3000/news/4", {
      username: name1,
      title: title1,
      body: newsBody1,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
  console.log("topic 4 updated");
}

function updatenews5() {
  var name1 = document.getElementById("userName").value;
  var title1 = document.getElementById("newsTitle").value;
  var newsBody1 = document.getElementById("newsBody").value;
  axios
    .patch("http://localhost:3000/news/5", {
      username: name1,
      title: title1,
      body: newsBody1,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
  console.log("topic 5 updated");
}

const findTheCheckbox = () => {
  var box1 = document.getElementById("inlineCheckbox1").checked;
  var box2 = document.getElementById("inlineCheckbox2").checked;
  var box3 = document.getElementById("inlineCheckbox3").checked;
  var box4 = document.getElementById("inlineCheckbox4").checked;
  var box5 = document.getElementById("inlineCheckbox5").checked;

  if (
    box1 == false &&
    box2 == false &&
    box3 == false &&
    box4 == false &&
    box5 == false
  ) {
    alert("Please Select at least one topic id!");
    return;
  }

  box1 && updatenews1();
  box2 && updatenews2();
  box3 && updatenews3();
  box4 && updatenews4();
  box5 && updatenews5();
};

document.getElementById("post").addEventListener("click", findTheCheckbox);

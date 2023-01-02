$(document).ready(function () {
  var urlParams = new window.URLSearchParams(window.location.search);
  const article_id = urlParams.get("articleID");
  console.log(article_id);
  let articles = [];
  //   let article = {};

  //   url =
  //     "https://raw.githubusercontent.com/ryantsui1109/flashing_life-res/master/data.json";
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", url);
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4) {
  //       articles = JSON.parse(xhr.responseText);
  //     }
  //   };
  //   xhr.send();
  async function xhrGet(url, value) {
    await fetch(url + "?_=" + new Date().getTime())
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        for (let x in result) {
          value.push(result[x]);
        }
      });
  }
  function findArticle(article_list) {
    for (var x of article_list) {
      console.log(x.id);
      if (x.id == article_id) {
        return x;
        // break;
      }
    }
  }
  (async function () {
    let index = [];

    const data_url =
      "https://raw.githubusercontent.com/ryantsui1109/flashing_life-res/master/data.json";
    const index_url =
      "https://raw.githubusercontent.com/ryantsui1109/flashing_life-res/master/articles/index.json";
    const article_url =
      "https://raw.githubusercontent.com/ryantsui1109/flashing_life-res/master/articles/";
    await xhrGet(data_url, articles);
    await xhrGet(index_url, index);
    for (let i of index) {
      await xhrGet(`${article_url}${i}.json`, articles);
    }
    const article = findArticle(articles);
    $("title").text(article.title + " | 搞機知識站");
    $("#article-title").text(article.title);
    $("#article-content").empty();
    console.log(typeof article.content);
    for (var x of article.content) {
      if (x == "") {
        $("#article-content").append("<br>");
      } else {
        $("#article-content").append(`<h4 style="font-weight:300;">${x}</h4>`);
      }
    }
    $("#article-date").text(`由 ${article.author} 於 ${article.date} 發佈`);
  })();

  //   setTimeout(() => {
  //     console.log(findArticle(articles));
});

$(document).ready(function() {
    article_id = localStorage.getItem('targetid')
    articles = []
    article = []
    url = "https://raw.githubusercontent.com/ryantsui1109/flashing_life-arti/master/data.json"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            articles = JSON.parse(xhr.responseText)
        }
    }
    xhr.send();

    function findArticle(article_list) {
        for (var x of article_list) {
            if (x.id == article_id) {
                article = x
            }
        }
    }
    setTimeout(() => {
        findArticle(articles)
        $('#article-title').text(article.title);
        $('#article-content').text(article.content);
        $('#article-date').text(`由 ${article.author} 於 ${article.date} 發佈`);
    }, 100);

});
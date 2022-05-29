$(document).ready(function() {
    var urlParams = new window.URLSearchParams(window.location.search);
    article_id = urlParams.get('articleID')
    console.log(article_id)
    articles = []
    article = []

    url = "https://raw.githubusercontent.com/ryantsui1109/flashing_life-res/master/data.json"
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
        $('title').text(article.title + ' | 搞機知識站');
        $('#article-title').text(article.title);
        $('#article-content').empty();
        for (var x of article.content) {
            $('#article-content').append(x);
            $('#article-content').append('<br>');
        }
        $('#article-date').text(`由 ${article.author} 於 ${article.date} 發佈`);
    }, 100);
});
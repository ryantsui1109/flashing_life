$(document).ready(function() {
    clicks = 0
    articles = []

    var url = "https://raw.githubusercontent.com/ryantsui1109/flashing_life-arti/master/data.json";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {

            article = xhr.responseText
            console.log(article)
        }
    };

    xhr.send();
    $('#dropdown-menu-01-01').on('click', function() {
        clicks++

        if (clicks < 4) {
            alert('真的沒了\(￣︶￣*\))')
        } else {
            if (clicks < 7) {
                alert('我真的沒騙你')
            } else {
                if (clicks < 10) {
                    alert('別點了...')
                } else {
                    alert("沒救了...")
                }
            }
        }
    })
})
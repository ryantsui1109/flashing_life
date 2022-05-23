$(document).ready(function() {
    var clicks = 0
    var articles = []
    card_template = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>`

    function getData(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                articles = JSON.parse(xhr.responseText)
            }

        }
        xhr.send();
    };

    function renderList(articleList) {

        for (x of articleList) {
            console.log(x.title)
            console.log(x.content)
            $('#container').prepend(`
            </br>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${x.title}</h5>
        <p class="card-text omit">${x.content}</p>
      </div>
    </div>
    
    `);
        }
        console.log('read list finished')



    }

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
    });
    getData("https://raw.githubusercontent.com/ryantsui1109/flashing_life-arti/master/data.json");
    setTimeout(() => {

        renderList(articles);
    }, 100);


})
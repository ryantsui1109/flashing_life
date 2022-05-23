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

    url = "https://raw.githubusercontent.com/ryantsui1109/flashing_life-arti/master/data.json"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            articles = JSON.parse(xhr.responseText)
        }

    }
    xhr.send();

    function renderList(articleList) {

        for (x of articleList) {
            $('#container').prepend(`
            </br>
    <div id="${x.id}" class="card post" onclick="localStorage.setItem('targetid', $(this).attr('id'));window.open('./article/');">
      <div class="card-body">
        <h4 style="font-weight:500;" class="card-title">${x.title}</h4>
        <h5 style="font-weight:300;" class="card-text omit">${x.content}</h5>
        <h6 style="font-weight:300;" class="text-secondary">#${x.id}<h6>
      </div>
    </div>
    
    `);
        }
    }
    // $('.post').click(function(e) {
    //     console.log($(this).attr(id))
    //         // localStorage.setItem('targetid', $(this).attr(id))
    // });

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
    setTimeout(() => {
        renderList(articles);
    }, 100);
});
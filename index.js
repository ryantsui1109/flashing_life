$(document).ready(function() {

    var clicks = 0
    var articles = []
    var searchCondi = [
        ['searchAll', '全域搜尋'],
        ['searchByID', '依照ID'],
        ['searchByTitle', '依照標題'],
        ['searchByContent', '依照內容'],
        ['searchByDate', '依照日期'],
        ['searchByAuthor', '依照作者']
    ]
    var searchBy = "searchAll"

    url = "https://raw.githubusercontent.com/ryantsui1109/flashing_life-res/master/data.json?_="
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + new Date().getTime());
    // xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            articles = JSON.parse(xhr.responseText)
        }
    }
    xhr.send();

    function determinePlaceholder(elementID) {
        if (elementID == "searchByDate") {
            $('#search-input').attr('type', 'date');
        } else {
            $('#search-input').attr('type', 'text');
        }
    }

    function renderPost(articleList) {
        $('#container').empty();
        console.log(articleList)
        for (x of articleList) {
            if (!x.hidden) {
                console.log(x.tags)
                $('#container').prepend(`
                    </br>
                    <div id="${x.id}" class="shadow-sm border-0 card post" onclick="localStorage.setItem('targetid', $(this).attr('id'));window.open('./article/');">
                        <div class="card-body">
                                <h4 style="font-weight:500;" class="card-title mb-0">${x.title}</h4>
                                <div id="${x.id}-tags">
                                    
                                </div>
                                <h6 class="text-secondary">由 ${x.author} 於 ${x.date} 發佈</h6>
                                <h5 style="font-weight:300;" class="card-text omit">${x.content}</h5>
                                <h6 style="font-weight:300;" class="text-secondary">#${x.id}<h6>
                        </div>
                    </div>
                `);
            }
            for (const y of x.tags) {
                $(`#${x.id}-tags`).append(`<span class="badge badge-info mr-1">${y}</span>`);
            }

        }
    }

    function renderSearch(dropdownList) {
        for (x of dropdownList) {
            $('#search-dropdown').append(`
                <p id="${x[0]}" class="search-dropdown-item dropdown-item" onclick="searchBy=$(this).attr('id');">${x[1]}</p>
            `);
        }
    }

    function findPost(keyWord, articleList) {
        temp = []
        reg = new RegExp(keyWord, 'i')

        if (searchBy == 'searchByID') {
            articleList.forEach(function(d) {
                if (d.id == keyWord) {
                    temp.push(d)
                }

            });
        }

        if (searchBy == 'searchByTitle') {
            articleList.forEach(function(d) {
                if (reg.test(d.title)) {
                    temp.push(d)
                }
            });
        }

        if (searchBy == 'searchByContent') {
            articleList.forEach(function(d) {
                if (reg.test(d.content)) {
                    temp.push(d)
                }
            });
        }

        if (searchBy == 'searchByDate') {
            articleList.forEach(function(d) {
                if (d.date == keyWord) {
                    temp.push(d)
                }
            });
        }
        if (searchBy == 'searchByAuthor') {
            articleList.forEach(function(d) {
                if (d.author == keyWord) {
                    temp.push(d)
                }
            });
        }

        if (searchBy == 'searchAll') {
            articleList.forEach(function(d) {
                if (reg.test(d.title) || reg.test(d.content) || reg.test(d.id) || reg.test(d.date)) {
                    temp.push(d)
                }
            });
        }
        //先推入temp最後統一更新
        renderPost(temp)
            // console.log(temp)
    }

    $(document).on('click', '.search-dropdown-item', function() {
        determinePlaceholder(this.getAttribute('id'))
    });

    $('#searchByDate').on('click', function() {
        console.log($(this))
    });

    renderSearch(searchCondi);

    setTimeout(() => {
        renderPost(articles);
    }, 300);
});
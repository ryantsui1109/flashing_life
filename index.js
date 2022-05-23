$(document).ready(function() {
    clicks = 0
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
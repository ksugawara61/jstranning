(function () {
    'use strict';

    let btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        let n = Math.floor(Math.random() * 3);
        this.textContent = n;
    });
    btn.addEventListener('mousedown', function() {
        this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function() {
        this.className = '';
    });
})();
(function () {
    'use strict';

    let btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        let n = Math.random();
        if (n < 0.05) {
            this.textContent = '大吉';
        } else if (n < 0.2) {
            this.textContent = '中吉';
        } else {
            this.textContent = '凶';
        }

        /*let results = ['大吉', '中吉', '凶', '末吉'];
        let n = Math.floor(Math.random() * results.length);
        this.textContent = results[n];*/
    });
    btn.addEventListener('mousedown', function() {
        this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function() {
        this.className = '';
    });
})();
(function() {
    'use strict';

    let start  = document.getElementById('start');
    let stop   = document.getElementById('stop');
    let result = document.getElementById('result');
    let startTime;
    let isStarted = false;
    
    start.addEventListener('click', function() {
        if (isStarted) {
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.className = 'pushed';
        stop.className = '';
        result.textContent = '0.000';
        result.className = 'standby';
    });

    stop.addEventListener('click', function() {
        let elapsedTime;
        let diff;
        if (!isStarted) {
            return;
        }

        isStarted = false;
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        this.className = 'pushed';
        start.className = '';
        result.className = '';

        diff = elapsedTime - 5.0;
        if (Math.abs(diff) < 1.0) {
            result.className = 'perfect';
        }
    });
})();
// on page load...
    moveProgressBar();
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
        let getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        let getProgressWrapWidth = $('.progress-wrap').width();
        let progressTotal = getPercent * getProgressWrapWidth;
        let animationLength = 2500;
        
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
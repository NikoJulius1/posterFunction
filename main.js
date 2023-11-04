$(document).ready(function() {
    setupPosters();

    $("#prevArrow").click(switchToLeft);
    $("#nextArrow").click(switchToRight);
});

function setupPosters() {
    $(".poster").eq(0).addClass('active');
    $(".poster").eq(1).addClass('right');
    $(".poster").eq(2).addClass('left');
}

function switchToRight() {
    const active = $(".poster.active");
    const right = $(".poster.right");
    const left = $(".poster.left");

    // Immediate switch without transition
    right.css('transition', 'none');
    right.addClass('out-of-view').removeClass('right');

    // Next animation frame
    requestAnimationFrame(() => {
        // Reposition to the left without transition
        right.addClass('left').removeClass('out-of-view');
        // Restore transition for the actual movement
        right.css('transition', '');

        // Actual transition
        active.removeClass('active').addClass('right');
        left.removeClass('left').addClass('active');

        const newLeft = $(".poster.active").prev('.poster');
        if (newLeft.length) {
            newLeft.removeClass('right').addClass('left');
        } else {
            $('.poster').last().removeClass('right').addClass('left');
        }
    });
}

function switchToLeft() {
    const active = $(".poster.active");
    const right = $(".poster.right");
    const left = $(".poster.left");

    // Immediate switch without transition
    left.css('transition', 'none');
    left.addClass('out-of-view').removeClass('left');

    // Next animation frame
    requestAnimationFrame(() => {
        // Reposition to the right without transition
        left.addClass('right').removeClass('out-of-view');
        // Restore transition for the actual movement
        left.css('transition', '');

        // Actual transition
        active.removeClass('active').addClass('left');
        right.removeClass('right').addClass('active');

        const newRight = $(".poster.active").next('.poster');
        if (newRight.length) {
            newRight.removeClass('left').addClass('right');
        } else {
            $('.poster').first().removeClass('left').addClass('right');
        }
    });
}
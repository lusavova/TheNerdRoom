$('.aside').hide();
$('.current-book-container').hide();
//$('.item-container').hide();
$('.cover').hide();

let commentIsHidden = false;

let commentShowHide = function () {
    if (commentIsHidden === true) {
        $('.comment.hide-section').show();
        commentIsHidden = false;
        $("#bnt-show-hide-comments img").replaceWith('<img src="new-elements/left (2).png">')
    } else {
        $('.comment.hide-section').hide();
        commentIsHidden = true;
        $("#bnt-show-hide-comments img").replaceWith('<img src="new-elements/down (2).png">')
    }
};

$('#bnt-show-hide-comments').on('click', function () {
    // this is the button
    var $this = $(this);
    commentShowHide();
});

$('#comment-link').on('click', function () {
    // this is the button
    var $this = $(this);

    commentShowHide();
});

let reviewsIsHidden = false;

let reviweShowHide = function () {
    if (reviewsIsHidden === true) {
        $('.reviews.hide-section').show();
        reviewsIsHidden = false;
        $("#rev-bnt-show-hide img").replaceWith('<img src="new-elements/left (2).png" alt="OPEN">')
    } else {
        $('.reviews.hide-section').hide();
        reviewsIsHidden = true;
        $("#rev-bnt-show-hide img").replaceWith('<img src="new-elements/down (2).png" alt="HIDE">')
    }
}

$('#rev-bnt-show-hide').on('click', function () {
    // this is the button
    var $this = $(this);
    reviweShowHide();
});

$('#reviews-link').on('click', function () {
    // this is the button
    var $this = $(this);
    reviweShowHide();
});

//console.log(nineteenEightyFour);
$('#books-link').on('click', function () {
    // this is the button
    var $this = $(this);
    $('.aside').show();
    $("#item-container-row").hide();    
    $("#item-container-row").empty();
    $.get("templates/book-item.html", function(template) {
        for (let book in booksArray) {
            var text = Mustache.render(template, booksArray[book]);
            $("#item-container-row").append(text);
        }     
        
        $('#item-container-row').show();
    });
});

$('#book-title').on('click', function () {
    // this is the button
    var $this = $(this);

    $('.item-container').hide();
    $('.current-book-container').show();
});

$('.nav-icons').hide();
$(window).resize(function () {
    if ($(this).width() < 650) {
        $('.nav-initial').hide();
        $('.nav-icons').show();
    } else {
        $('.nav-initial').show();
        $('.nav-icons').hide();
    }
});

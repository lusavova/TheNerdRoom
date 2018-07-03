$(document).ready(function () {
    console.log("ready!");
});

$('.aside').hide();

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
    commentShowHide();
});

$('#comment-link').on('click', function () {
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
    reviweShowHide();
});

$('#reviews-link').on('click', function () {
    reviweShowHide();
});

let currentAuthorInfo = function () {
    $('#item-container-row').show();
    $('.book-author').on('click', function () {
        $('.item-container').hide();
        $('.current-author-container').empty();
        let authorName = $(this)
            .find("a")
            .text();
            //debugger;
        $.get("templates/current-author.html", function (template) {
            let author = authorsArray.filter(x => x.name === authorName)[0];
            var text = Mustache.render(template, author);

            $(".current-author-container ").append(text);
        });
        $('.current-author-container ').show();
    });
}

let currentBookInfo = function () {
    $('#item-container-row').show();
    $('.item-container').show();
    $('.current-author-container').hide();

    $('.book-title').on('click', function () {
        $('.item-container').hide();
        $('.current-book-container').empty();
        let bookTitle = $(this)
            .find("a")
            .text();
        $.get("templates/current-book.html", function (template) {
            let book = booksArray.filter(x => x.title === bookTitle)[0];
            var text = Mustache.render(template, book);

            $(".current-book-container").append(text);
        });
        $('.current-book-container').show();
    });
}

let showCategoryItems = function (books) {
    $.get("templates/book-item.html", function (template) {
        for (let book in books) {
            var text = Mustache.render(template, books[book]);
            $("#item-container-row").append(text);
        }
        currentBookInfo();
        $('.current-book-container').hide();
        $('.current-author-container').hide();
        currentAuthorInfo();
    });
}

$('.books-link').on('click', function () {
    $('.aside').show();
    $("#item-container-row").empty();
    let books = booksArray;
    showCategoryItems(books);
});

$('.classics-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Classics"));
    showCategoryItems(books);
});

$('.science-fiction-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Science Fiction"));
    showCategoryItems(books);

});

$('.horror-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Horror"));
    showCategoryItems(books);
});

$('.crime-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Crime"));
    showCategoryItems(books);
});

$('.fantasy-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Fantasy"));
    showCategoryItems(books);
});

$('.young-adult-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Young Adult"));
    showCategoryItems(books);
});
$('.adventure-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Adventure"));
    showCategoryItems(books);
});
$('.thriller-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Thriller"));
    showCategoryItems(books);
});
$('.short-stories-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Short Stories"));
    showCategoryItems(books);
});
$('.philosophy-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Philosophy"));
    showCategoryItems(books);
});
$('.romance-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Romance"));
    showCategoryItems(books);
});
$('.religion-books').on('click', function () {
    $("#item-container-row").empty();
    let books = booksArray.filter(x => x.genre.includes("Religion"));
    showCategoryItems(books);
});

let showAuthorsCategory = function (authors) {
    $.get("templates/author-item.html", function (template) {
        for (let currentAuthor in authors) {
            var text = Mustache.render(template, authors[currentAuthor]);
            $("#item-container-row").append(text);
        }
        $('.current-author-container').hide();
        currentAuthorInfo();
    });
}

$('.authors-category').on('click', function () {
    $("#item-container-row").empty();
    let authors = authorsArray;
    showAuthorsCategory(authors);
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



$("ul#book-categories").hide();
$("ul#genre-categories").hide();
$("ul#main-categories").hide();

$("#menu-icon").click(function(){
    $("ul#main-categories").toggle("slide");
});

$("#books-link").click(function(){
    $("ul#book-categories").toggle("slide");
});

$("#genre-link").click(function(){
    $("ul#genre-categories").toggle("slide");
});
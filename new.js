// let commentIsHidden = false;

// $('#bnt-show-hide-comments').on('click', function () {
//     // this is the button
//     var $this = $(this);

//     if (commentIsHidden === true) {
//         $('.comment.hide-section').show();
//         commentIsHidden = false;
//         $("#bnt-show-hide-comments img").replaceWith('<img src="new-elements/left (2).png">')
//     } else {
//         $('.comment.hide-section').hide();
//         commentIsHidden = true;
//         $("#bnt-show-hide-comments  img").replaceWith('<img src="new-elements/down (2).png">')
//     }
// });

// $('#comment-link').on('click', function () {
//     // this is the button
//     var $this = $(this);

//     if (commentIsHidden === true) {
//         $('.hide-section').show();
//         commentIsHidden = false;
//         $("#bnt-show-hide-comments img").replaceWith('<img src="new-elements/left (2).png">')
//     } else {
//         $('.hide-section').hide();
//         commentIsHidden = true;
//         $("#bnt-show-hide-comments img").replaceWith('<img src="new-elements/down (2).png">')
//     }
// });

// let reviewsIsHidden = false;

// $('#bnt-show-hide').on('click', function () {
//     // this is the button
//     var $this = $(this);

//     if (reviewsIsHidden === true) {
//         $('.reviews.hide-section').show();
//         reviewsIsHidden = false;
//         $("#bnt-show-hide img").replaceWith('<img src="new-elements/left (2).png" alt="OPEN">')
//     } else {
//         $('.reviews.hide-section').hide();
//         reviewsIsHidden = true;
//         $("#bnt-show-hide img").replaceWith('<img src="new-elements/down (2).png" alt="HIDE">')
//     }
// });

// $('#reviews-link').on('click', function () {
//     // this is the button
//     var $this = $(this);

//     if (reviewsIsHidden === true) {
//         $('.reviews.hide-section').show();
//         reviewsIsHidden = false;
//         $("#bnt-show-hide img").replaceWith('<img src="new-elements/left (2).png">')
//     } else {
//         $('.reviews.hide-section').hide();
//         reviewsIsHidden = true;
//         $("#bnt-show-hide img").replaceWith('<img src="new-elements/down (2).png">')
//     }
// });

class Book {
    constructor(title, author, genre, published, bookCover, authorPhoto, bookInfo) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.published = published;
        this.bookCover = bookCover;
        this.authorPhoto = authorPhoto;
        this.bookInfo = bookInfo;
    }
}


var a = new Book("The Great Gatsby", "F. Scott Fitzgerald", ["classic", "horror"], "April 10, 1925", '<img src="book-covers/the-great-gatsby.jpg" alt="The Great Gatsby Book Cover">', "project/books/Authors/Fyodor-Dostoevsky/fyodor-dostoevsky-photo.jpg", "info");
var b = new Book(";kjsdnf;kj", "F. Scott Fitzgerald", ["classic"], "April 10, 1925", '<img src="book-covers/the-great-gatsby.jpg" alt="The Great Gatsby Book Cover">', "project/books/Authors/Fyodor-Dostoevsky/fyodor-dostoevsky-photo.jpg", "info");
var c = new Book("3", "F. Scott Fitzgerald", ["classic"], "April 10, 1925", '<img src="book-covers/the-great-gatsby.jpg" alt="The Great Gatsby Book Cover">', "project/books/Authors/Fyodor-Dostoevsky/fyodor-dostoevsky-photo.jpg", "info");
var books = [a, b, c];

books.forEach(x => {
    let obj = {
        name: x.title
    }

    console.log(x.title);
});

books.filter(x=>x.genre.includes("horror")).forEach(x=>console.log(x.title));


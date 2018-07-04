
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


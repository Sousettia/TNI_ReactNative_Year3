var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];
function filterBookByPrice(book) {
    return book.filter(function (book) { return book.genre == 'fiction' && book.price > 300; });
}
//สร้างฟังก์ชั่นชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%
function discountBook(books) {
    return books.map(function (book) { return (__assign(__assign({}, book), { price: book.price * 0.90 })); });
}
var filterBook = filterBookByPrice(books);
var discountBooks = discountBook(filterBook);
console.log(discountBooks);

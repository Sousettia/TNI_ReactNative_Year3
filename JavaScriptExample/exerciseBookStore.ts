interface Book {
  title: string;
  genre: "fiction" | "non-fiction" | "educational";
  price: number;
}

const books: Book[] = [
  { title: "The Great Gatsby", genre: "fiction", price: 320 },
  { title: "War and Peace", genre: "fiction", price: 250 },
  { title: "Economics 101", genre: "educational", price: 480 },
  { title: "In Cold Blood", genre: "non-fiction", price: 300 },
  { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];

function filterBookByPrice(book: Book[]): Book[] {
  return book.filter((book) => book.genre == "fiction" && book.price > 300);
}

//สร้างฟังก์ชั่นชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%

function discountBook(books: Book[]): Book[] {
  return books.map((book) => ({ ...book, price: book.price * 0.9 }));
}

let filterBook = filterBookByPrice(books);
let discountBooks = discountBook(filterBook);

console.log(discountBooks);

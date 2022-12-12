import BookCard from "./BookCard";

import { useSelector } from "react-redux";
import { buyAbook } from "../../slices/booksSlice";

const PopularBooks = () => {
  const allBooks = useSelector((state) => {
    return state.books;
  });
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-between items-end my-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Popular books in Phonetices
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur
            adipisicing elit.
          </p>
          <p>Ut quos cupiditate, nemo debitis, explicabo voluptas.</p>
        </div>
        <button className="btn bg-gradient-to-r from-blue-500 to-fuchsia-600 border-none">
          Browse all Books
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 pb-20">
        {allBooks &&
          allBooks.map((book, idx) => (
            <BookCard key={book.id} book={book} idx={idx} buyAbook={buyAbook} />
          ))}
      </div>
    </div>
  );
};

export default PopularBooks;

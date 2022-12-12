import BookCard from "../../components/booksComponents/BookCard";
import BooksBanner from "../../components/booksComponents/BooksBanner";
import PopularBooks from "../../components/booksComponents/PopularBooks";
export default function Lessons() {
  return (
    <div className="bg-slate-900">
      <BooksBanner />
      <PopularBooks />
    </div>
  );
}

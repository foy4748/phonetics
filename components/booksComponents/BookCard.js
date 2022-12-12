import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function BookCard({ book, buyAbook, idx }) {
  const dispatch = useDispatch();
  return (
    <div className=" shadow-md border rounded-lg">
      {/* <img className="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image"> */}
      <Image
        src="/BookBannerImg.jpeg"
        className="rounded-t-lg p-4 w-full"
        width={100}
        height={100}
        alt=""
      />
      <div className="px-5 pb-5">
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight hover:text-blue-500">
          {book.title}
        </h3>
        <div className="flex items-center mt-2.5 mb-5 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            ${book.price}
          </span>
          <button
            disabled={book.paid}
            onClick={() => {
              dispatch(buyAbook(idx));
              toast.success(`${book.title} purchase was successfull`);
            }}
            className="btn btn-primary"
          >
            {book.paid ? "Purchased" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

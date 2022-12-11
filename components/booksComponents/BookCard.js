import Image from "next/image";
import Link from "next/link";
import { FaStar } from 'react-icons/fa';

export default function BookCard({ book }) {
  return (
    <div className="bg-slate-200 shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {/* <img className="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image"> */}
      <Image src='/BookBannerImg.jpeg' className="rounded-t-lg p-4 w-full" width={100} height={100} alt='' />
      <div className="px-5 pb-5">
        <Link href='/'>
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight hover:text-blue-500">{book.title}</h3>
        </Link>
        <div className="flex items-center mt-2.5 mb-5 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${book.price}</span>
          <Link href="#"
            className="text-white bg-gradient-to-r from-blue-500 to-fuchsia-600 hover:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
            to cart</Link>
        </div>
      </div>
    </div>
  );
}

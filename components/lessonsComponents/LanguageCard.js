import Link from "next/link";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import Image from "next/image";
export default function LanguageCard({ LCardDetails, bookAlesson, idx }) {
  const { flagUrl, languageName, New, booked } = LCardDetails;
  const dispatch = useDispatch();
  return (
    <div className="card w-100 lg:w-96 bg-base-100 shadow-xl">
      <figure className="w-full">
        <Image
          src={flagUrl}
          alt="Shoes"
          width={400}
          height={300}
          className="w-full max-h-30 min-h-30"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {languageName}
          {New && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>Learn {languageName} at your own pace</p>
        <div className="card-actions justify-end">
          <button
            disabled={booked}
            onClick={() => {
              dispatch(bookAlesson(idx));
              toast.success(
                `${languageName} language lesson booked successfully`
              );
            }}
            className="btn btn-primary"
          >
            Book a Lesson
          </button>
          <Link href={`/lessons/${languageName.toLowerCase()}`}></Link>
        </div>
      </div>
    </div>
  );
}

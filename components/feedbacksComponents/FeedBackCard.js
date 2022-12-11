import { FaStar, FaRegStar } from "react-icons/fa";

export default function FeedBackCard({ feedback }) {
  console.log(feedback)
  const rating = parseFloat(feedback?.rating);

  

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={feedback?.photoURL} alt="" />
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-semibold">{feedback?.displayName}</h1>
            <p>{feedback?.date}</p>
          </div>
        </div>
        
        {feedback?.rating && (
          <div className="flex text-yellow-400 text-xl">
            {[...Array(rating).keys()].map((f, i) => (
              <FaStar key={i}></FaStar>
            ))}
            {[...Array(5 - rating).keys()].map((f, i) => (
              <FaRegStar key={i}></FaRegStar>
            ))}
          </div>
        )}
      </div>
      <p className="ml-16 mt-3 text-gray-500">{feedback?.message}</p>
    </div>
  );
}

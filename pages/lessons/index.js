import LanguageCard from "../../components/lessonsComponents/LanguageCard";

import { useSelector } from "react-redux";
import { bookAlesson } from "../../slices/lessonBookingSlice";

export default function Lessons() {
  const flagDetails = useSelector((state) => {
    return state.lessons;
  });

  return (
    <div className="m-10">
      <h1 className="text-6xl">Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {flagDetails?.map((img, idx) => {
          return (
            <LanguageCard
              LCardDetails={img}
              idx={idx}
              bookAlesson={bookAlesson}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

import LanguageCard from "../../components/lessonsComponents/LanguageCard";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../slices/testSlice";

export default function Lessons() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const flagDetails = [
    { flagUrl: "/flagSpain.jpg", languageName: "Spanish", New: true },
    { flagUrl: "/flagGermany.jpg", languageName: "German" },
    { flagUrl: "/flagFrance.jpg", languageName: "French" },
    ,
  ];
  return (
    <div className="m-10">
      <h1 className="text-6xl">Lessons</h1>
      <div>
        {count}
        <button onClick={() => dispatch(increment())}>inc</button>
        <button onClick={() => dispatch(decrement())}>dec</button>
        <button onClick={() => dispatch(incrementByAmount("5"))}>5 inc</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {flagDetails.map((img, idx) => {
          return <LanguageCard LCardDetails={img} key={idx} />;
        })}
      </div>
    </div>
  );
}

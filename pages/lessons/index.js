import LanguageCard from "../../components/lessonsComponents/LanguageCard";
export default function Lessons() {
  const flagDetails = [
    { flagUrl: "/flagSpain.jpg", languageName: "Spanish", New: true },
    { flagUrl: "/flagGermany.jpg", languageName: "German" },
    { flagUrl: "/flagFrance.jpg", languageName: "French" },
    ,
  ];
  return (
    <div className="m-10">
      <h1 className="text-6xl">Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {flagDetails.map((img, idx) => {
          return <LanguageCard LCardDetails={img} key={idx} />;
        })}
      </div>
    </div>
  );
}

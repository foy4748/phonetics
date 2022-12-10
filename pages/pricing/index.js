import FreeCard from "../../components/pricingComponents/FreeCard";
import PricingCard from "../../components/pricingComponents/PricingCard";
export default function Lessons() {
  return (
    <div className="bg-gray-700 text-center">
      <h1 className="text-white">Rajus Working Area!!</h1>
      <h1 className="text-white text-4xl font-bold">Phonetics Course Prices</h1>
      <FreeCard></FreeCard>
      <PricingCard />
    </div>
  );
}

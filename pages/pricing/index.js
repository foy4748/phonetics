import DiamondCard from "../../components/pricingComponents/DiamondCard";
import FreeCard from "../../components/pricingComponents/FreeCard";
import PremiumCard from "../../components/pricingComponents/PremiumCard";
import PricingCard from "../../components/pricingComponents/PricingCard";
export default function Lessons() {
  return (
    <div className="bg-gray-700 text-center">
      <h1 className="text-white">Rajus Working Area!!</h1>
      <h1 className="text-white text-4xl font-bold">Phonetics Course Prices</h1>
      <FreeCard></FreeCard>
      <PremiumCard></PremiumCard>
      <DiamondCard></DiamondCard>
    </div>
  );
}

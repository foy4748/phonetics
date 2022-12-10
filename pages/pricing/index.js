import DiamondCard from "../../components/pricingComponents/DiamondCard";
import FreeCard from "../../components/pricingComponents/FreeCard";
import PremiumCard from "../../components/pricingComponents/PremiumCard";
import PricingCard from "../../components/pricingComponents/PricingCard";
export default function Lessons() {

  {/* Raju's Design Area. Please Don't Edit Without Inform me  */ }

  return (
    <div className=" text-center w-5/6 mx-auto py-20">
      <h1 className="text-white text-4xl font-bold">Phonetics Course Prices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 justify-items-center">
        <FreeCard></FreeCard>
        <PremiumCard></PremiumCard>
        <DiamondCard></DiamondCard>
      </div>
    </div>
  );
}

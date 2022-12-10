import DiamondCard from "../../components/pricingComponents/DiamondCard";
import FreeCard from "../../components/pricingComponents/FreeCard";
import PremiumCard from "../../components/pricingComponents/PremiumCard";
import PricingCard from "../../components/pricingComponents/PricingCard";
export default function Lessons() {
  return (
    <div className=" text-center w-5/6 mx-auto">
      <h1 className="text-white">Rajus Working Area!!</h1>
      <h1 className="text-white text-4xl font-bold">Phonetics Course Prices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24">
        <FreeCard></FreeCard>
        <PremiumCard></PremiumCard>
        <DiamondCard></DiamondCard>
      </div>
    </div>
  );
}

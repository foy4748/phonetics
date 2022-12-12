import LanguageCard from "../components/homeComponents/LanguageCard";
import LearningFeature from "../components/homeComponents/LearningFeature";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-[1240px]">
      <LanguageCard></LanguageCard>
      <LearningFeature></LearningFeature>
    </div>
  );
}

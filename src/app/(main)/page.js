import FeaturedAnimals from "@/components/hompage/FeaturedAnimals";
import QurbaniTips from "@/components/hompage/QurbaniTips";
import Banner from "@/components/shared/Banner";



export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbaniTips></QurbaniTips>
    </div>
  );
}

import CustomerReviews from "@/components/hompage/CustomerReviews";
import FeaturedAnimals from "@/components/hompage/FeaturedAnimals";
import QurbaniTips from "@/components/hompage/QurbaniTips";
import Banner from "@/components/shared/Banner";



export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbaniTips></QurbaniTips>
      <CustomerReviews></CustomerReviews>
    </div>
  );
}

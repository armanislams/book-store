import Banner from "@/components/Home/Banner";
import Featured from "@/components/Home/Featured";
import LimitedOfferSection from "@/components/Home/LimitedOffers";
import NewsletterSection from "@/components/Home/NewsLetter";
import StatsSection from "@/components/Home/Stats";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <Featured/>
      <LimitedOfferSection/>
      <NewsletterSection />
      <StatsSection/>
    </div>
  );
}

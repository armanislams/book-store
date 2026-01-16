import Banner from "@/components/Home/Banner";
import EventsTimeline from "@/components/Home/EventsTimeline";
import Featured from "@/components/Home/Featured";
import LimitedOfferSection from "@/components/Home/LimitedOffers";
import NewsletterSection from "@/components/Home/NewsLetter";
import RecentEvents from "@/components/Home/RecentEvents";
import StatsSection from "@/components/Home/Stats";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Banner />
      <Featured/>
      <LimitedOfferSection />
      <EventsTimeline />
      <RecentEvents/>
      <NewsletterSection />
      <StatsSection/>
    </div>
  );
}

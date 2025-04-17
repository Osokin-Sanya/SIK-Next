import Head from "next/head";
import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import HowSection from "../src/components/HowSection";
import HowMarquee from "../src/components/HowMarquee";
import Container from "../styles/Container.module.css";
import ChoiceSection from "../src/components/ChoiceSection";
import PortfolioSection from "../src/components/PortfolioSection";
import TeamSection from "../src/components/TeamSection";
import HowStepper from "../src/components/HowStepper";
import ReviewsSlider from "../src/components/ReviewsSlider";
import RealReviewsBlock from "../src/components/RealReviewsBlock";
import ContactFormBlock from "../src/components/ContactFormBlock";
import FooterBlock from "../src/components/FooterBlock";

export default function Home() {
  return (
    <>
      <Head>
        <title>SIK — Створимо сайт для бізнесу</title>
        <meta
          name="description"
          content="Створимо сайт для вашого бізнесу. Безкоштовний маркетинговий аудит."
        />
      </Head>
      <div className={Container.container}>
        <Header />
        <HeroSection />
      </div>
      <HowMarquee />
      <div className={Container.container}>
        <HowSection />
        <HowStepper />
        <PortfolioSection />
        <ChoiceSection />
        <TeamSection />
        <ReviewsSlider />
        <RealReviewsBlock />
        <ContactFormBlock />
        <FooterBlock />
      </div>
    </>
  );
}

import HeroBadge from "@/components/atoms/badge/hero-badge";
import PrimaryButton from "@/components/atoms/button/primary-button";
import GradientText from "@/components/atoms/text/gradient-text";
import Section from "@/components/template/layout/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleWhitePaper = () => {
    window.open("/pdf/whitepaper.pdf", "_blank");
  };

  return (
    <Section className="pt-[100px] xl:pb-[120px]">
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/background/hero-background.png"
          alt="hero-bg"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Banner */}
      <div className="flex flex-col gap-[48px] items-center justify-between max-w-[900px] mx-auto">
        <HeroBadge className="text-primary space-x-4">
          <Badge className="bg-primary rounded-full font-bolera font-bold text-xs px-4 h-8">
            <span className="text-black text-base font-poppins">New</span>
          </Badge>
          <span className="text-center text-base md:text-base lg:text-xl">
            QuestX bot for your X community
          </span>
          <ArrowRight className="w-16 sm:w-8 md:w-6" />
        </HeroBadge>

        <div className="container">
          <div className="flex flex-col gap-8 justify-center items-center w-full  text-[45px] lg:text-6xl">
            <h1 className=" font-bolera font-bold break-all flex gap-4 flex-wrap text-center justify-center tracking-wide">
              <span className="text-center">Revolutionizing</span>
              <GradientText text="Giveaways" />
              for Your
              <span>Community</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-center max-w-[600px] font-poppins">
              Effortlessly host, automate, manage, and monitor quiz-based
              giveaways in your community.
            </p>
          </div>
        </div>

        <PrimaryButton className="text-xl" onClick={handleWhitePaper}>
          Whitepaper
        </PrimaryButton>
      </div>
    </Section>
  );
};

export default HeroSection;

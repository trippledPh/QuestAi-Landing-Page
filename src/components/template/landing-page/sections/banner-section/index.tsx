import PrimaryButton from "@/components/atoms/button/primary-button";
import Section from "@/components/template/layout/section";

const BannerSection = () => {
  return (
    <Section id="support">
      <div className="relative gap-10 flex-col bg-secondary rounded-xl pb-8 overflow-hidden">
        <div className="absolute xl:top-0 xl:-left-[120px]">
          <img
            src="/images/background/radial-beam.svg"
            alt="radial"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-0 right-0 ">
          <img
            src="/images/background/radial-beam-right.svg"
            alt="radial"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-around xl:gap-10 xl:h-[400px]">
          <div className="">
            <img
              src="/images/logo/quest-ai-solo-blue-logo.svg"
              alt="banner"
              className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] object-contain mix-blend-soft-light"
            />
          </div>

          <div className="space-y-8 flex justify-center items-center flex-col text-center max-w-xl  z-50 relative">
            <h3 className="text-5xl lg:text-6xl font-bolera flex flex-col gap-2">
              <span className="text-white">Your Giveaway,</span>
              <span className="text-white">Our Questions</span>
            </h3>
            <p className="text-base font-light">
              Try out QuestAI Telegram bot now for your community and experience
              the ease of hosting giveaways!
            </p>

            <PrimaryButton className="bg-white hover:bg-primary">
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BannerSection;

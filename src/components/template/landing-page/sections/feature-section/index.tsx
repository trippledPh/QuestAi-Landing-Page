import Section from "@/components/template/layout/section";
import EasyAuthenticationCard from "./components/cards/easy-authentication-card";
import CustomizableWinnerSelectionCard from "./components/cards/customizable-winner-selection-card";
import AutomatedGivewayManagementCard from "./components/cards/automated-giveway-management-card";
import InstantWinnerNotificationCard from "./components/cards/instant-winner-notification";
import TrackParticipationCard from "./components/cards/track-participation-card";
import HeroBadge from "@/components/atoms/badge/hero-badge";

const FeatureSection = () => {
  return (
    <Section id="feature">
      <div className="flex flex-col gap-4 justify-center items-center space-y-4 mb-8 md:mb-16">
        <HeroBadge className="px-4 py-2 rounded-full" variant="outline">
          <span className="text-sm">Introducing</span>
        </HeroBadge>

        <div className="w-[340px]">
          <img
            src="/images/logo/quest-ai-transformed-logo.png"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-lg md:text-xl text-center text-muted-foreground">
          The first-ever giveaway bot designed specifically for X.
        </span>
      </div>

      {/* grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_2fr_auto] gap-4 */}
      {/*   */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_2fr_auto] gap-4">
        {/* Left Section */}
        <div className=" sm:grid sm:grid-cols-1 sm:gap-4 md:grid-rows-2 xl:flex xl:flex-col xl:justify-between xl:items-center gap-4">
          <EasyAuthenticationCard />
          <CustomizableWinnerSelectionCard />
        </div>

        <div className="grid grid-cols-1 md:grid-rows-2 gap-4">
          <AutomatedGivewayManagementCard />
          <InstantWinnerNotificationCard />
        </div>

        <div className="flex flex-col gap-4 ">
          <TrackParticipationCard />
        </div>
      </div>
    </Section>
  );
};

export default FeatureSection;

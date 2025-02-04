import HeroBadge from "@/components/atoms/badge/hero-badge";
import GradientText from "@/components/atoms/text/gradient-text";
import PieDonutChart from "@/components/molecules/chart/pie-donut-chart";
import Section from "@/components/template/layout/section";
import { Separator } from "@/components/ui/separator";

const TokenomicsSection = () => {
  return (
    <Section
      className="flex justify-center items-center flex-col overflow-hidden"
      id="tokenomics"
    >
      <div className="mb-8">
        <HeroBadge className="">Tokenomics</HeroBadge>
      </div>

      <div className="flex justify-center items-center flex-col gap-4 mb-12">
        <div className="flex flex-col items-center justify-center p-4 gap-2 xl:flex-row">
          <h3 className="text-5xl text-center lg:text-left lg:text-6xl font-bold font-bolera lg:tracking-wide">
            Total Supply:
          </h3>
          <GradientText
            text="10,000,000"
            className="text-5xl lg:text-6xl font-bold font-bolera"
          />
        </div>
        <p className="text-xl max-w-2xl text-center text-muted-foreground">
          QuestAI's tokenomics structure is strategically allocated to drive
          growth, stability, and long-term success.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col gap-4 mb-12">
        <PieDonutChart />
      </div>

      <div className="flex flex-col gap-4 items-center xl:flex-row">
        <span className="space-x-2">
          <GradientText text="4/4" className="text-3xl font-semibold" />
          <span className="text-3xl font-semibold">Tax</span>
        </span>

        <Separator className="h-8" orientation="vertical" />

        <span className="space-x-2">
          <GradientText text="2%" className="text-3xl font-semibold" />
          <span className="text-3xl font-semibold">Marketing</span>
        </span>

        <Separator className="h-8" orientation="vertical" />

        <span className="space-x-2">
          <GradientText text="1%" className="text-3xl font-semibold" />
          <span className="text-3xl font-semibold">Development</span>
        </span>

        <Separator className="h-8" orientation="vertical" />

        <span className="space-x-2">
          <GradientText text="1%" className="text-3xl font-semibold" />
          <span className="text-3xl font-semibold">Team</span>
        </span>
      </div>
    </Section>
  );
};

export default TokenomicsSection;

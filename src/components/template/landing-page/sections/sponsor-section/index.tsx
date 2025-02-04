import Section from "@/components/template/layout/section";
import { SponsorData } from "./data";
import { Card, CardContent } from "@/components/ui/card";

const SponsorSection = () => {
  return (
    <Section className="flex justify-center items-center flex-col gap-8 overflow-hidden lg:grid lg:grid-cols-[25%_auto] lg:gap-4 lg:justify-start lg:items-start">
      <div className="flex flex-col gap-4 justify-center items-center mb-8">
        <h3 className="text-xl text-muted-foreground text-center font-poppins lg:text-left">
          Your trusted partner for community growth
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 overflow-hidden">
        {/* <InfiniteMovingCards items={SponsorData} /> */}
        {SponsorData.map((sponsor) => (
          <Card key={sponsor.id} className="w-[350px] bg-[#1d1d1d]">
            <CardContent className="p-4">
              <img src={sponsor.image} alt="sponsor" />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SponsorSection;

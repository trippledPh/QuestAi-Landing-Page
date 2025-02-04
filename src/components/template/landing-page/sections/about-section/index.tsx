import PrimaryButton from "@/components/atoms/button/primary-button";
import Section from "@/components/template/layout/section";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutData, AboutDataProps } from "./data";
import FadeCard from "@/components/atoms/card/fade-card";
import HeroBadge from "@/components/atoms/badge/hero-badge";
const AboutSection = () => {
  return (
    <Section className="relative pt-[64px]" id="about">
      <div className="grid grid-cols-1 xl:grid-cols-[55%_auto] gap-16 ">
        <div className="flex flex-col gap-8 items-start">
          <HeroBadge>
            <div>QuestAI</div>
          </HeroBadge>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-5xl lg:text-6xl font-bolera">QuestBot</h2>
            <p className="text-lg text-muted-foreground  max-w-[700px]">
              A powerful Telegram bot designed to make running quizzes and
              giveaways in your community effortless. With just a few clicks,
              you can set up an automated giveaway, eliminating the need for
              manual management. The bot takes care of everything—from asking
              questions to selecting winners, all powered by AI.
            </p>
          </div>

          <PrimaryButton>Get started</PrimaryButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          {AboutData.map((items: AboutDataProps) => (
            <FadeCard key={items.id}>
              <CardHeader className="">
                {items.icon}
                <CardTitle className="text-2xl">{items.title}</CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="text-lg text-muted-foreground">
                  {items.description}
                </p>
              </CardContent>
            </FadeCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

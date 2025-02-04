import FeatureCard from "@/components/atoms/card/feature-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AutomatedGivewayManagementCard = () => {
  return (
    <FeatureCard className="p-0 relative border flex flex-col justify-center  min-h-[400px] xl:h-full xl:w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full  xl:h-[400px]">
          <img
            src="/images/background/feature-automated-giveaway.svg"
            alt="feature-1"
            className="w-full h-full object-cover xl:object-contain"
          />
        </div>

        <div className="w-full">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-medium px-6 py-2">
              Automated Giveaway Management
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground max-w-[700px]">
            Let QuestX automatically create, schedule, and manage giveaway
            tweets for you—saving you time and effort..
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default AutomatedGivewayManagementCard;

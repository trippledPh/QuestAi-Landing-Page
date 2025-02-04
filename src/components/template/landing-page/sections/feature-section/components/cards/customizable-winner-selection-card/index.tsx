import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomizableWinnerSelectionCard = () => {
  return (
    <FeatureCard className="p-0 relative w-full xl:max-w-[450px] xl:h-full">
      <div className="flex flex-col justify-between items-center border w-full h-full">
        <div className="w-full h-full">
          <img
            src="/images/background/feature-customization.png"
            alt="feature-1"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-medium px-6 py-2">
              Customizable Winner Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Choose winners based on your preferred criteria whether it's random
            selection, top engagement, or custom rules you've set up.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default CustomizableWinnerSelectionCard;

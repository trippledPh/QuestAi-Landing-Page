import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InstantWinnerNotificationCard = () => {
  return (
    <FeatureCard className="p-0 relative flex flex-col justify-center items-center xl:h-full xl:w-full  ">
      <div className="flex flex-col justify-center xl:justify-between items-center xl:h-full xl:w-full  ">
        <div className=" h-[250px] xl:h-[300px]">
          <img
            src="/images/background/feature-instant-notification.svg"
            alt="feature-1"
            className="w-full object-cover h-full"
          />
        </div>

        <div className="w-full">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-medium px-6 py-2">
              Instant Winner Notification
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Notify your lucky winners in real-time through direct messages or
            tweets, keeping the excitement alive and ensuring no one misses out.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default InstantWinnerNotificationCard;

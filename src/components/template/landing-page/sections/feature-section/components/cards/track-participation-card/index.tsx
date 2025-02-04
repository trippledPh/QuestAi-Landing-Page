import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrackParticipationCard = () => {
  return (
    <FeatureCard className="p-0 relative w-full h-full xl:max-w-[450px]">
      <div className="flex flex-col justify-between items-center  h-full">
        <div className="h-full">
          <img
            src="/images/background/feature-track-participation.svg"
            alt="feature-1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-end items-center">
          <div>
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-medium px-6 py-2">
                Track Participation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Track all interactions easily by monitoring likes, retweets,
              follows, and specific hashtags, ensuring you capture the full
              scope of your giveaway's engagement.
            </CardContent>
          </div>
        </div>
      </div>
    </FeatureCard>
  );
};

export default TrackParticipationCard;

import FeatureCard from "@/components/atoms/card/feature-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EasyAuthenticationCard = () => {
  return (
    <FeatureCard className="relative w-full h-[300px] xl:h-[600px]  xl:max-w-[450px] mb-4 md:h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-full relative flex justify-center items-center">
          <img
            src="/images/background/feature-bg-1.svg"
            alt="feature-1"
            className="w-full h-full object-cover"
          />
          <div className="w-16 h-16 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/images/logo/x-logo.png"
              alt="x-logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <CardHeader className="p-0">
            <CardTitle className="text-xl px-6 py-2 font-poppins font-medium">
              Easy Authentication
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground max-w-[450px]">
            Sign in quickly with your X account via Oauth to get started in
            seconds.
          </CardContent>
        </div>
      </div>
    </FeatureCard>
  );
};

export default EasyAuthenticationCard;

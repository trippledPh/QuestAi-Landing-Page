export interface AboutDataProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const AboutData: AboutDataProps[] = [
  {
    id: 0,
    title: "Telegram Bot API Integration",
    icon: (
      <img
        src="/images/icons/TelegramLogo.svg"
        alt="telegram"
        className="w-[32px] h-[32px] object-cover"
      />
    ),
    description:
      "QuestAI uses the Telegram Bot API to interact with groups and channels.",
  },
  {
    id: 1,
    title: "Customization",
    icon: (
      <img
        src="/images/icons/CusotmizationLogo.svg"
        alt="telegram"
        className="w-[32px] h-[32px] object-cover"
      />
    ),
    description:
      "Customize question difficulty to suit different audiences and quiz formats.",
  },
  {
    id: 2,
    title: "Real-Time Answer Detection and Winner Tracking",
    icon: (
      <img
        src="/images/icons/ConnectivityLogo.svg"
        alt="telegram"
        className="w-[32px] h-[32px] object-cover"
      />
    ),
    description:
      "QuestAI’s bot is powered by chat parsing and answer matching algorithms. ",
  },
  {
    id: 3,
    title: "Bot Interface and Command Structure",
    icon: (
      <img
        src="/images/icons/MonitorLogo.svg"
        alt="telegram"
        className="w-[32px] h-[32px] object-cover"
      />
    ),
    description:
      "QuestAI features a simple and intuitive interface for easy interaction.   ",
  },
];

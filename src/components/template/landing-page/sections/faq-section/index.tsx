import HeroBadge from "@/components/atoms/badge/hero-badge";
import Section from "@/components/template/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";

const FAQData = [
  {
    id: 0,
    title: "What is QuestAI?",
    content: (
      <div className="space-y-4">
        <p>
          QuestAI is a powerful Telegram bot designed to make running quizzes
          and giveaways in your community effortless. With just a few clicks,
          you can set up an automated giveaway, eliminating the need for manual
          management. The bot takes care of everything—from asking questions to
          selecting winners, all powered by AI.
        </p>

        <p>
          QuestAI detects who answers the questions correctly and the fastest,
          rewarding quicker responses with more points. Once all the questions
          are answered, the bot automatically generates a leaderboard showcasing
          the top performers, adding an exciting competitive element to your
          community.
        </p>

        <p>
          Whether you're hosting a fun quiz or a giveaway, QuestAI handles it
          all automatically, allowing you to focus on engaging with your members
          instead of managing the process.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    title: "How do I integrate QuestAI into my Telegram community?",
    content:
      "QuestAI can easily be integrated into any Telegram group or channel using Telegram’s Bot API. Once added, community admins can configure giveaway settings, such as quiz topics, the number of questions, and prize amounts. The bot then automatically handles the rest.",
  },
  {
    id: 2,
    title: "What types of giveaways can QuestAI automate?",
    content:
      "QuestAI automates trivia-based giveaways. Community admins can set the quiz topic, difficulty level, and number of questions. The bot will generate trivia questions, collect answers, and track winners in real-time.",
  },
  {
    id: 3,
    title: "How does the AI generate trivia questions?",
    content:
      "QuestAI uses Natural Language Processing (NLP) to generate trivia questions based on a specified topic (e.g., 'Christmas'). The bot leverages large pre-trained AI models (like GPT-3 or GPT-4) to ensure questions are accurate, relevant, and engaging.",
  },
  {
    id: 4,
    title: "How does QuestAI track winners and responses?",
    content:
      "The bot tracks user responses in real-time, using advanced AI algorithms to detect correct answers as soon as they are submitted. It rewards points to the fastest correct responders and updates the leaderboard instantly to reflect standings.",
  },
  {
    id: 5,
    title: "How does the leaderboard work?",
    content:
      "Points are awarded based on the speed of the correct answer. The faster you respond with the correct answer, the more points you earn. After each correct answer is detected, the bot updates the leaderboard in real-time. The leaderboard displays the top users based on their points, providing ongoing motivation for participants to stay engaged throughout the event.",
  },
  {
    id: 6,
    title: "Can I customize the giveaway settings?",
    content: (
      <div>
        Absolutely! As an admin, you can configure various aspects of the
        giveaway, including:
        <ul className="list-disc space-y-2 pl-4 mb-4">
          <li className="flex items-center gap-2">
            <Circle fill="currentColor" className="w-2 h-2" />
            <span>The quiz topic</span>
          </li>
          <li className="flex items-center gap-2">
            <Circle fill="currentColor" className="w-2 h-2" />
            <span>The number of questions</span>
          </li>
          <li className="flex items-center gap-2">
            <Circle fill="currentColor" className="w-2 h-2" />
            <span>The prize amounts</span>
          </li>
          <li className="flex items-center gap-2">
            <Circle fill="currentColor" className="w-2 h-2" />
            <span>Difficulty level of the questions</span>
          </li>
        </ul>
        Once configured, Quest AI handles everything automatically.
      </div>
    ),
  },
  {
    id: 7,
    title:
      "What happens if there are multiple users answering at the same time?",
    content:
      "QuestAI uses advanced AI-powered algorithms to detect who provided the correct answer first. It considers factors like spelling variations and phrasing differences to ensure accurate winner detection, even if multiple users respond at nearly the same time.",
  },
  {
    id: 8,
    title: "Is QuestAI scalable for large communities?",
    content:
      "Yes, QuestAI is designed to handle large numbers of users simultaneously, making it suitable for both small and large Telegram communities. Its robust infrastructure ensures it can scale with the size and activity level of your community.",
  },
];

const FaqSection = () => {
  return (
    <Section className="" id="faq">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="mb-8">
          <div className="mb-8">
            <HeroBadge>FAQs</HeroBadge>
          </div>
          <h3 className="text-5xl lg:text-6xl  max-w-2xl font-bolera lg:tracking-wide">
            Need to know more about QuestAI?
          </h3>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            {FAQData.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg lg:text-xl font-medium">
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <Separator className="mb-4" />
                  <p className="text-base text-muted-foreground">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default FaqSection;

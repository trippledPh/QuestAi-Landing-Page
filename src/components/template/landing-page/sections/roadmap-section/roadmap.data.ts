export interface TimelineItem {
  id: string;
  title: string;
  items: { id: string; text: string }[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "q1-2024",
    title: "Q1",
    items: [
      { id: "q1-item1", text: "Launch Beta Version" },
      { id: "q1-item2", text: "Initial Feature Set" },
      { id: "q1-item3", text: "Bot Development started" },
      { id: "q1-item4", text: "Social media setup" },
      { id: "q1-item5", text: "Community building: giveaway's and contests" },
      { id: "q1-item6", text: "Introducing QuestBot" },
      { id: "q1-item7", text: "Introducing QuestX" },
      { id: "q1-item8", text: "CG & CMC listing" },
      { id: "q1-item9", text: "Pilot bot integration for projects" },
      { id: "q1-item10", text: "QuestBot going live" },
      { id: "q1-item11", text: "First partnerships" },
      { id: "q1-item12", text: "1% club going live" },
      { id: "q1-item13", text: "QuestBot officially going live" },
      { id: "q1-item14", text: "First marketing push started" },
    ],
  },
  {
    id: "q2",
    title: "Q2",
    items: [
      { id: "q2-item1", text: "Bot Development v2" },
      { id: "q2-item2", text: "QuestX Development started" },
      { id: "q2-item3", text: "Trending on multiple platforms" },
      { id: "q2-item4", text: "Expanding Quest's algorithm" },
      { id: "q2-item5", text: "Expansion of partnerships" },
      { id: "q2-item6", text: "Revenue share for 1% club" },
      { id: "q2-item7", text: "CEX listing" },
      { id: "q2-item8", text: "Quests own ad campaign going live" },
      {
        id: "q2-item9",
        text: "Introducing Quest AI's all -time Trophy haul NFT's",
      },
    ],
  },
  {
    id: "q3",
    title: "Q3",
    items: [
      { id: "q3-item1", text: "New algorithms added" },
      { id: "q3-item2", text: "Launch of QuestX" },
      { id: "q3-item3", text: "Introducing Multilingual support launch" },
      { id: "q3-item4", text: "Expansion partnerships" },
      { id: "q3-item5", text: "Start of the Quest NFT collection" },
      { id: "q3-item6", text: "Start of QuestAI's NFT development" },
      { id: "q3-item7", text: "Introducing Quest AI's marketplace" },
      { id: "q3-item8", text: "Leaderboard integration going live" },
      { id: "q3-item9", text: "Quests puzzle development starting" },
      { id: "q3-item10", text: "More CEX listings" },
    ],
  },
  {
    id: "q4",
    title: "Q4",
    items: [
      { id: "q4-item1", text: "Bot Development v3" },
      { id: "q4-item2", text: "Multilingual support launch" },
      { id: "q4-item3", text: "New algorithms added" },
      { id: "q4-item4", text: "Monthly leaderboard giveaways going live" },
      { id: "q4-item5", text: "Expansion partnerships" },
      { id: "q4-item6", text: "Mass campaign started" },
      {
        id: "q4-item7",
        text: "Quest AI's all-time Trophy haul NFT's going live!",
      },
      { id: "q4-item8", text: "Quest AI's marketplace going live!" },
      { id: "q4-item9", text: "Quest puzzle going live" },
    ],
  },
];

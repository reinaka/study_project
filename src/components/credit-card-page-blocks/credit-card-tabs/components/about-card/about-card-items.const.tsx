import { Cash, Calendar, Clock, Bag, Card } from "@components/ui/icons";

export const ABOUT_CARD_ITEMS = [
  {
    title: "Up to 50 000 ₽",
    content: "Cash and transfers without commission and percent",
    image: <Cash />,
  },
  {
    title: "Up to 160 days",
    content: "Without percent on the loan",
    image: <Calendar />,
  },
  {
    title: "Free delivery",
    content:
      "We will deliver your card by courier at a convenient place and time for you",
    image: <Clock />,
  },
  {
    title: "Up to 12 months",
    content:
      "No percent. For equipment, clothes and other purchases in installments",
    image: <Bag />,
  },
  {
    title: "Convenient deposit and withdrawal",
    content:
      "At any ATM. Top up your credit card for free with cash or transfer from other cards",
    image: <Card />,
  },
];

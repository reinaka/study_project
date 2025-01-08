export type BannerLoanItemT = {
  heading: string;
  text: string;
  tooltip: string;
  id: string;
};

export const BANNER_LOAN_ITEMS = [
  {
    heading: "Up to 160 days",
    text: "No percent",
    tooltip: "When repaying the full debt up to 160 days",
    id: "001",
  },
  {
    heading: "Up to 600 000 ₽",
    text: "Credit limit",
    tooltip: "Over the limit willaccrue percent",
    id: "002",
  },
  {
    heading: "0 ₽",
    text: "Card service is free",
    tooltip: "Promotion valid until December 31, 2022",
    id: "003",
  },
];

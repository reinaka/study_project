import { vi } from "vitest";
import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BASE_URL } from "@utils/const/const";
import { Offers, Offer } from "@components/page-blocks";

const mockData = [
  {
    applicationId: 58,
    requestedAmount: 150000,
    totalAmount: 150000,
    term: 6,
    monthlyPayment: 25952.95,
    rate: 13,
    isInsuranceEnabled: false,
    isSalaryClient: false,
  },
  {
    applicationId: 58,
    requestedAmount: 150000,
    totalAmount: 160000,
    term: 6,
    monthlyPayment: 27366.6,
    rate: 9,
    isInsuranceEnabled: true,
    isSalaryClient: false,
  },
  {
    applicationId: 58,
    requestedAmount: 150000,
    totalAmount: 150000,
    term: 6,
    monthlyPayment: 25878.36,
    rate: 12,
    isInsuranceEnabled: false,
    isSalaryClient: true,
  },
  {
    applicationId: 58,
    requestedAmount: 150000,
    totalAmount: 160000,
    term: 6,
    monthlyPayment: 27288.95,
    rate: 8,
    isInsuranceEnabled: true,
    isSalaryClient: true,
  },
];

describe("Offers", () => {
  const getOffers = () => screen.queryAllByTestId("offer");
  const getButton = () => screen.getByText("Select");
  vi.mock("axios");

  it("Offers should be rendered", () => {
    render(<Offers offersArr={mockData} />, { wrapper: MemoryRouter });
    expect(getOffers()).toHaveLength(4);
  });

  it("Should select offer on button click", async () => {
    render(<Offer offer={mockData[0]} />, { wrapper: MemoryRouter });
    fireEvent.click(getButton());
    expect(axios.post).toHaveBeenCalledWith(
      `${BASE_URL}/application/apply`,
      mockData[0],
    );
  });
});
